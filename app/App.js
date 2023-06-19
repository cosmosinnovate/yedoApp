import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import colors from "./components/colors";
import AppProtectedNavigator from "./navigation/AppProtectedNavigator";
import AppPublicNavigator from "./navigation/AppPublicNavigator";
import CustomSplashView from "./CustomSplashView";
import { AuthContext } from "./services/store/store.context";
import { getAuthToken } from "./services/store/store.token";
import jwtDecode from "jwt-decode";

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
    const token = await getAuthToken();
    if (!token) return;
    const user = jwtDecode(token);
    if (user?.verified) {
      setUser(user);
    }
  };

  useEffect(() => {
    restoreToken().then(() => setIsReady(true)); // Fetch the token and set the app ready state
  }, []);

  if (!isReady) {
    return <CustomSplashView />;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={MyTheme}>
        {user ? (
          <AppProtectedNavigator />
        ) : (
          <AppPublicNavigator />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
