import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {useEffect, useState} from "react";
import colors from "./components/colors";
import AppProtectedNavigator from "./navigation/AppProtectedNavigator";
import AppPublicNavigator from "./navigation/AppPublicNavigator";
import CustomSplashView from "./CustomSplashView";
import jwtDecode from "jwt-decode";
import {getJWToken} from "./redux/token";
import {setAuth} from "./redux/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: "white", // Add a background color option
    text: "black", // Add a text color option
  },
  mode: "light",
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Can use this function below or use Expo's Push Notification Tool from: https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token.data;
}

export default function App() {
  const {auth} = useSelector(state => state.auth);
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  const restoreToken = async () => {
    const token = await getJWToken();
    if (!token) return;

    if (token) {
      const user = jwtDecode(token);
      dispatch(setAuth(user));
    }
  };

  useEffect(() => {
    restoreToken().then(() => setIsReady(true)); // Fetch the token and set the app ready state
  }, [isReady]);

  if (!isReady) {
    return <CustomSplashView />;
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer theme={MyTheme}>
        {auth !== null ? (
          <AppProtectedNavigator />
        ) : (
          <AppPublicNavigator />
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
