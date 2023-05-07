import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Welcome from "../screens/Welcome";
import { createStackNavigator } from "@react-navigation/stack";
import ConfirmCode from "../screens/ConfirmCode";
import CreateGroup from "../screens/CreateGroup";

const Stack = createStackNavigator();

const AppPublicNavigator = (props) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUp"
      component={Signup}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ConfirmCode"
      children={(screenProps) => (
        <ConfirmCode {...screenProps} setAuthenticated={props.setAuthenticated} />
      )}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CreateGroup"
      component={CreateGroup}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppPublicNavigator;
