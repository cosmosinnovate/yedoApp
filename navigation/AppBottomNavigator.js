import { EvilIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../components/colors';
import { HomeIcon, MembersIcon, NotificationIcon } from '../components/svgIcons/cliqueIcon';
import CreateNew from '../screens/CreateNew';
import Home from '../screens/Home';
import Member from '../screens/Member';
import Notification from '../screens/Notification';
import AccountNavigator from './AccountNavigator';
import NewTaskButton from './NewTaskButton';
import route from './route';

const AppTabs=createBottomTabNavigator();

const AppBottomNavigator=() => (
    <AppTabs.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor: colors.white
            }
        }}>
        <AppTabs.Screen name={route.HOME}
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => <HomeIcon color={color} />
            }}
        />
        <AppTabs.Screen name={route.MEMBER}
            component={Member}
            options={{
                headerShown: true,
                tabBarIcon: ({ color, size }) => <MembersIcon color={color} />
            }}
        />

        <AppTabs.Screen name={route.CREATE_TASK}
            component={CreateNew}
            options={({ navigation }) => ({
                tabBarButton: ({ color, size }) => <NewTaskButton onPress={() => navigation.navigate(route.CREATE_TASK)} />,
                headerShown: true,
                headerLeftContainerStyle: {padding:10},
                headerRightContainerStyle: {padding:10}

            })}
        />

        <AppTabs.Screen name={route.NOTIFICATION}
            component={Notification}
            options={{
                headerShown: true,
                tabBarIcon: ({ color, size }) => <NotificationIcon color={color} />
            }}
        />

        <AppTabs.Screen name={route.PROFILE}
            component={AccountNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => <EvilIcons name="user" size={30} color={color} />
            }}
        />
    </AppTabs.Navigator>
);

export default AppBottomNavigator;
