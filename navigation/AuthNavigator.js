import { View } from 'react-native';
import LoginView from '../views/LoginView';
import SignupView from '../views/SignupView';
import WelcomeView from "../views/WelcomeView";
import { createStackNavigator } from '@react-navigation/stack';
import ConfirmCode from '../views/ConfirmCode';

const Stack=createStackNavigator();

const AuthNavigator=() => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeView} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginView} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignupView} options={{headerShown: false}}/>
        <Stack.Screen name="ConfirmCode" component={ConfirmCode} options={{headerShown: false}}/>
    </Stack.Navigator>
);


export default AuthNavigator;
