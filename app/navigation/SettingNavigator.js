import { createStackNavigator } from '@react-navigation/stack';
import colors from '../components/colors';
import Profile from '../screens/profile/Profile';
import Edit from '../screens/profile/Edit';
import NotificationSetting from '../screens/NotificationSetting';

const Stack=createStackNavigator();

const SettingNavigator=() => (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
        <Stack.Screen name="Edit" component={Edit} options={{ headerShown: true }} />
        <Stack.Screen name="Notification" component={NotificationSetting} options={{ headerShown: true }} />
    </Stack.Navigator>
);


export default SettingNavigator;
