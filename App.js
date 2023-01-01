import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";
import AppBottomNavigator from "./navigation/AppBottomNavigator";
import colors from "./components/colors";
import { useState } from "react";


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
  },
};

export default function App() {
  //  
  const [authenTicated, setAuthenticated]=useState(true);

  return (
      <NavigationContainer theme={MyTheme}>
        { authenTicated ? <AppBottomNavigator /> : <AuthNavigator setAuthenticated={setAuthenticated}/> }
      </NavigationContainer>
  )
}

