import { Button, TouchableOpacity, View } from 'react-native';
import MemberView from '../views/MemberView';
import SignupView from '../views/SignupView';
import SettingView from "../views/SettingView";
import { createStackNavigator } from '@react-navigation/stack';
import ProfileView from '../views/ProfileView';
import colors from '../components/colors';
import { AntDesign } from '@expo/vector-icons';

const Stack=createStackNavigator();

const AccountNavigator=() => (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>
        <Stack.Screen name="Account" component={ProfileView} options={{ headerShown: false }} />
        <Stack.Screen name="Members" component={MemberView}
            options={({ navigation, route }) => ({
                headerShown: true,
                headerRight: () => <Button style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 10,
                }}
                    title='Invite' />
            })} />
        <Stack.Screen name="Setting" component={SettingView} options={{ headerShown: true }} />
        <Stack.Screen name="SignUp" component={SignupView} options={{ headerShown: false }} />
    </Stack.Navigator>
);


export default AccountNavigator;
