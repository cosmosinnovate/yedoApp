import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import colors from "./components/colors";
import AppProtectedNavigator from "./navigation/AppProtectedNavigator";
import AppPublicNavigator from "./navigation/AppPublicNavigator";
import CustomSplashView from "./CustomSplashView";
import jwtDecode from "jwt-decode";
import { getJWToken } from "./utils/token";
import { setAuth } from "./redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

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
  const { auth } = useSelector(state => state.auth);
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  const restoreToken = async () => {
    const token = await getJWToken();

    if (!token) return;

    const user = jwtDecode(token);
    if (user?.verified === true) {
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
    <NavigationContainer theme={MyTheme}>
      {auth ? (
        <AppProtectedNavigator />
      ) : (
        <AppPublicNavigator />
      )}
    </NavigationContainer>
  );
}
