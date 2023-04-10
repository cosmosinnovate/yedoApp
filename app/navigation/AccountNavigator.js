import { createStackNavigator } from '@react-navigation/stack';
import colors from '../components/colors';
import Member from '../screens/Member';
import Profile from '../screens/Profile';
import Setting from "../screens/Setting";

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
