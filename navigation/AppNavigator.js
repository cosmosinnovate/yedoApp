import { View } from 'react-native';
import HomeView from '../views/HomeView';
import CreateTaskView from '../views/CreateTaskView';
import ProfileView from '../views/ProfileView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeView from '../views/WelcomeView';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import NewTaskButton from './NewTaskButton';
import AccountNavigator from './AccountNavigator';
import { HomeIcon, MembersIcon, NotificationIcon } from '../components/svgIcons/cliqueIcon';
import MemberView from '../views/MemberView';
import NotificationView from '../views/NotificationView';


const Tab=createBottomTabNavigator();

const AppNavigator=() => (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor: "#000"
            }
        }}>  
        <Tab.Screen name="Home"
            component={HomeView}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => <HomeIcon color={color} />
            }}
        />
        <Tab.Screen name="Members"
            component={MemberView}
            options={{
                headerShown: true,
                tabBarIcon: ({ color, size }) => <MembersIcon color={color}/>
            }}
        />
        <Tab.Screen name="CreateTask"
            component={CreateTaskView}
            options={({ navigation }) => ({
                tabBarButton: ({ color, size }) => <NewTaskButton onPress={() => navigation.navigate('CreateTask')} />,
                headerShown: false,
            })}
        />
        <Tab.Screen name="Notifications"
            component={NotificationView}
            options={{
                headerShown: true,
                tabBarIcon: ({ color, size }) => <NotificationIcon color={color}/>
            }}
        />

        <Tab.Screen name="Profile"
            component={AccountNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => <EvilIcons name="user" size={30} color={color} />
            }}
        />
    </Tab.Navigator>
);

export default AppNavigator;
