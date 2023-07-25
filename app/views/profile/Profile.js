import React, { useContext, useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import AppText from "../../components/AppText";
import colors from "../../components/colors";
import { AntDesign } from "@expo/vector-icons";
import routes from "../../navigation/routes";
import { ScrollView } from "react-native-gesture-handler";
import Spinner from "../../components/Spinner";
import { useFocusEffect } from "@react-navigation/core";
import { useSelector } from "react-redux";
import { getUser } from "../../services/api/api.client.user";

function Profile({ navigation }) {
  const [profile, setProfile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const user = useSelector(state => state.user);

  useEffect(() => {
    React.useCallback(() => {
      const getUserProfile = async () => {
        const { data } = await getUser(user?.id);
        setProfile(data?.data);
      };

      getUserProfile();

      return () => {
        getUserProfile();
      };
    }, [])
    getUserProfile();
  }, [profile, loading]);

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
        <AppText size={16}>Group</AppText>
        <View style={{ flexDirection: "row" }}>
          <AppText size={16}>
            {profile?.name ? profile?.name : "No Group Name"}
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
        <AppText size={16}>User Name</AppText>
        <View style={{ flexDirection: "row" }}>
          <AppText size={16}>
            @{profile?.firstName}
            {profile?.lastName}
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
        <AppText size={16}>First Name</AppText>
        <View style={{ flexDirection: "row" }}>
          <AppText size={16}>{profile?.firstName}</AppText>
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
        <AppText size={16}>Last Name</AppText>
        <View style={{ flexDirection: "row" }}>
          <AppText size={16}>{profile?.lastName}</AppText>
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
        <AppText size={16}>Email</AppText>
        <View style={{ flexDirection: "row" }}>
          <AppText size={16}>{profile?.email}</AppText>
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
        <AppText size={16}>Phone Number</AppText>
        <View style={{ flexDirection: "row" }}>
          <AppText size={16}>
            {profile?.phoneNo ? profile?.phoneNo : "No Phone No"}
          </AppText>
        </View>
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
          paddingTop: 10,
          paddingBottom: 10,
          borderBottomColor: colors.gray,
          borderEndColor: colors.white,
          borderLeftColor: colors.white,
          borderTopColor: colors.gray,
          borderWidth: 1,
          justifyContent: "space-between",
          backgroundColor: colors.white,
        }}
      >
        <AppText size={16}>Notification Settings</AppText>
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
      <View style={{ marginBottom: 20, alignItems: "center" }}>
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
          <AppText size={16}>
            <AntDesign name="edit" size={24} color="black" />
          </AppText>
        </TouchableOpacity>
      </View>
      {userDataLoading ? <Spinner /> : <ProfileContent />}
    </ScrollView>
  );
}

export default Profile;
