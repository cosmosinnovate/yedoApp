import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from "../screens/Welcome";
import { createStackNavigator } from '@react-navigation/stack';
import ConfirmCode from '../screens/ConfirmCode';

const Stack=createStackNavigator();

const AuthNavigator=({ setAuthenticated }) => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={Signup} options={{headerShown: false}}/>
        <Stack.Screen name="ConfirmCode" component={ConfirmCode} options={{headerShown: false }}/>
    </Stack.Navigator>
);


export default AuthNavigator;
