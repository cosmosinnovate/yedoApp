import { Button, TouchableOpacity, View } from 'react-native';
import Member from '../screens/Member';
import Signup from '../screens/Signup';
import Setting from "../screens/Setting";
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import colors from '../components/colors';
import { AntDesign } from '@expo/vector-icons';

const Stack=createStackNavigator();

const AccountNavigator=() => (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>
        <Stack.Screen name="Profile Setting" component={Profile} options={{ headerShown: true }} />
        <Stack.Screen name="Members" component={Member}
            options={({ navigation, route }) => ({
                headerShown: true,
                headerRightContainerStyle: {
                    paddingRight: 20, 
                }
            })} />
        <Stack.Screen name="Setting" component={Setting} options={{ headerShown: true }} />
    </Stack.Navigator>
);


export default AccountNavigator;
