import Login from "../views/Login";
import Register from "../views/Register";
import Welcome from "../views/Welcome";
import { createStackNavigator } from "@react-navigation/stack";
import ConfirmCode from "../views/ConfirmCode";
import CreateGroup from "../views/CreateGroup";

const Stack = createStackNavigator();

const AppPublicNavigator = (props) => (
  <Stack.Navigator screenOptions={{ animationEnabled: false }}>
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
      name="Register"
      component={Register}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ConfirmCode"
      children={(screenProps) => (
        <ConfirmCode {...screenProps} />
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
