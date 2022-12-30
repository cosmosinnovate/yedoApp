import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";
import AppNavigator from "./navigation/AppNavigator";
import colors from "./components/colors";


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
  },
};

export default function App() {
  return (
      <NavigationContainer theme={MyTheme}>
        <AppNavigator />
      </NavigationContainer>
  )
}

