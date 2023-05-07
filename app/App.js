import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import colors from "./components/colors";
import AppProtectedNavigator from "./navigation/AppProtectedNavigator";
import AppPublicNavigator from "./navigation/AppPublicNavigator";
import CustomSplashScreen from "./CustomSplashScreen";
import { AuthContext } from "./services/store/store.context";
import storeToken from "./services/store/store.token";
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
    const token = await storeToken.getAuthToken();
    if (!token) return;
    const user = jwtDecode(token);
    console.log("USER: ", user)
    if (user) {
      setUser(user);
    }
  };

  useEffect(() => {
    restoreToken().then(() => setIsReady(true)); // Fetch the token and set the app ready state
  }, []);

  if (!isReady) {
    return <CustomSplashScreen />;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={MyTheme}>
        {user ? (
          <AppProtectedNavigator />
        ) : (
          <AppPublicNavigator setAuthenticated={setUser} />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
