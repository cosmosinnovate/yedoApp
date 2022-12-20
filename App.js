import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import TopNav from './components/TopNavView';
import CreateTaskView from './views/CreateTaskView';
import DashboardView from "./views/DashboardView";
import LoginView from './views/LoginView';
import MemberView from './views/MemberView';
import ProfileView from './views/ProfileView';
import SettingView from './views/SettingView';
import VerifyCodeView from './views/VerifyCodeView';
import WelcomeView from "./views/WelcomeView";

export default function App() {
  return (
    <SafeAreaView style={{
      paddingTop: StatusBar.currentHeight,
      height: "100%",
      alignItems: "center",
      backgroundColor: "#F7F7F7",
    }}>
      {/* <TopNav> */}
      {/* <LoginView title="Sign Up/Login"/> */}
      {/* <VerifyCodeView title="Enter Code"/> */}
      {/* </TopNav> */}
      {/* <CreateTaskView/> */}
      <TopNav title='Privacy Setting'>
        {/* <ProfileView /> */}
        {/* <MemberView/> */}
        <SettingView/>
      </TopNav>

      {/* <DashboardView /> */}
    </SafeAreaView>
  );
}


