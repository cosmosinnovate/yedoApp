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
        <Stack.Screen name="Account" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Members" component={Member}
            options={({ navigation, route }) => ({
                headerShown: true,
                headerRight: () => <Button style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 10,
                }}
                    title='Invite' />
            })} />
        <Stack.Screen name="Setting" component={Setting} options={{ headerShown: true }} />
        <Stack.Screen name="SignUp" component={Signup} options={{ headerShown: false }} />
    </Stack.Navigator>
);


export default AccountNavigator;
