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
