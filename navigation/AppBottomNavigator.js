import { View } from 'react-native';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../screens/Welcome';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import NewTaskButton from './NewTaskButton';
import AccountNavigator from './AccountNavigator';
import { HomeIcon, MembersIcon, NotificationIcon } from '../components/svgIcons/cliqueIcon';
import Member from '../screens/Member';
import Notification from '../screens/Notification';
import CreateNew from '../screens/CreateNew';
import route from './route';
import AuthNavigator from './AuthNavigator';

const AppTabs=createBottomTabNavigator();

const AppBottomNavigator=() => (
    <AppTabs.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor: "#000"
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
