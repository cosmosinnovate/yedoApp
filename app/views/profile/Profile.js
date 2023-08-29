import React, { useContext, useEffect } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import AppText from "../../components/AppText";
import colors from "../../components/colors";
import { AntDesign } from "@expo/vector-icons";
import routes from "../../navigation/routes";
import { ScrollView } from "react-native-gesture-handler";
import Spinner from "../../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/userSlice";
import { getUserId } from "../../utils/token";

function Profile({ navigation }) {

  const dispatch = useDispatch()

  useEffect(() => {
    const getUserProfile = async () => {
      const id = await getUserId();
      dispatch(getUser(id));
    };

    getUserProfile();

    // return () => {
    //   getUserProfile();
    // };
  }, []);

  const { user, loading } = useSelector(state => state.user);

  const ProfileContent = () => (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <AppText size={14}>Group</AppText>

        <View style={{ flexDirection: "row" }}>
          <AppText size={14}>
            {user?.name ? user?.name : "No Group Name"}
          </AppText>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <AppText size={14}>Email</AppText>

        <View style={{ flexDirection: "row" }}>
          <AppText size={14}>{user?.email}</AppText>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <AppText size={14}>User Name</AppText>
        <View style={{ flexDirection: "row" }}>
          <AppText size={14}>
            @{user?.firstName}
            {user?.lastName}
          </AppText>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <AppText size={14}>First Name</AppText>
        <TouchableOpacity onPress={() => navigation.navigate(routes.EDIT_PROFILE)} style={{ borderBottomColor: colors.black, borderBottomWidth: 1 }}>

        <View style={{ flexDirection: "row" }}>
          <AppText size={14}>{user?.firstName}</AppText>
        </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <AppText size={14}>Last Name</AppText>
        <TouchableOpacity onPress={() => navigation.navigate(routes.EDIT_PROFILE)} style={{ borderBottomColor: colors.black, borderBottomWidth: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <AppText size={14}>{user?.lastName}</AppText>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >

        <AppText size={14}>Phone Number</AppText>
        <TouchableOpacity onPress={() => navigation.navigate(routes.EDIT_PROFILE)} style={{ borderBottomColor: colors.black, borderBottomWidth: 1 }}>

        <View style={{ flexDirection: "row" }}>
          <AppText size={14}>
            {user?.phoneNo ? user?.phoneNo : "No Phone No"}
          </AppText>
        </View>
        </TouchableOpacity>

      </View>

      <View
        style={{
          flexDirection: "column",
          marginBottom: 40,
          backgroundColor: colors.white,
        }}
      ></View>

      <TouchableOpacity
        onPress={() => navigation.navigate(routes.NOTIFICATION_SETTING)}
        style={{
          flexDirection: "row",
          marginBottom: 10,
          borderStyle: 'none',
          paddingTop: 10,
          paddingBottom: 10,
          // borderBottomColor: colors.gray,
          // borderEndColor: colors.white,
          // borderTopColor: colors.gray,
          // borderWidth: 1,
          justifyContent: "space-between",
          backgroundColor: colors.white,
        }}
      >
        <AppText size={14}>Notification Settings</AppText>
        <AntDesign name="arrowright" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      style={{
        padding: 10,
        flex: 1,
        width: "100%",
        flexDirection: "column",
      }}
    >
      {/* <View style={{ marginBottom: 20, alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.EDIT_PROFILE)}
          style={{
            flexDirection: "row",
            marginBottom: 10,
            paddingTop: 10,
            paddingBottom: 10,
            justifyContent: "space-between",
            backgroundColor: colors.white,
          }}
        >
          <AppText size={14}>
            <AntDesign name="edit" size={24} color="black" />
          </AppText>
        </TouchableOpacity>
      </View> */}
      {loading && !user ? <ActivityIndicator size="large" color="#0000ff" /> : <ProfileContent />}
    </ScrollView>
  );
}

export default Profile;
