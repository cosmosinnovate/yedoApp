import { EvilIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../components/colors';
import { HomeIcon, MembersIcon, NotificationIcon, SettingIcon } from '../assets/svgIcons/cliqueIcon';
import CreateNew from '../screens/CreateNew';
import Home from '../screens/Home';
import Member from '../screens/Member';
import Notification from '../screens/Notification';
import SettingNavigator from './SettingNavigator';
import NewTaskButton from './NewTaskButton';
import routes from './routes';

const AppTabs=createBottomTabNavigator();

const AppProtectedNavigator=(props) => (
    <AppTabs.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor: colors.white
            }
        }}>
            
        <AppTabs.Screen name={routes.HOME}
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => <HomeIcon color={color} />
            }}
        />

        <AppTabs.Screen name={routes.MEMBER}
            component={Member}
            options={{
                headerShown: true,
                tabBarIcon: ({ color, size }) => <MembersIcon color={color} />
            }}
        />

        <AppTabs.Screen name={routes.CREATE_TASK}
            component={CreateNew}
            options={({ navigation }) => ({
                tabBarButton: ({ color, size }) => <NewTaskButton onPress={() => navigation.navigate(routes.CREATE_TASK)} />,
                headerShown: true,
                headerLeftContainerStyle: {padding:10},
                headerRightContainerStyle: {padding:10}

            })}
        />

        <AppTabs.Screen name={routes.NOTIFICATIONS}
            component={Notification}
            options={{
                headerShown: true,
                tabBarIcon: ({ color, size }) => <NotificationIcon color={color} />
            }}
        />

        <AppTabs.Screen name={routes.PROFILE_SETTING}
            component={SettingNavigator}
            options={{
                headerShown: false,
                title: 'Setting',
                tabBarIcon: ({ color, size }) => <SettingIcon color={color} />
            }}
        />
    </AppTabs.Navigator>
);

export default AppProtectedNavigator;
