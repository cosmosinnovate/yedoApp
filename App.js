import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";
import AppBottomNavigator from "./navigation/AppBottomNavigator";
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
        <AppBottomNavigator />
      </NavigationContainer>
  )
}

