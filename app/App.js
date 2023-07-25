import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import colors from "./components/colors";
import AppProtectedNavigator from "./navigation/AppProtectedNavigator";
import AppPublicNavigator from "./navigation/AppPublicNavigator";
import CustomSplashView from "./CustomSplashView";
import jwtDecode from "jwt-decode";
import { getJWToken } from "./services/token";


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
  },
};

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await getJWToken();

    if (!token) return;

    const user = jwtDecode(token);
    if (user?.verified === true) {
      setUser(user);
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
      {user ? (
        <AppProtectedNavigator />
      ) : (
        <AppPublicNavigator />
      )}
    </NavigationContainer>
  );
}
