import React, {useEffect} from "react";
import {ActivityIndicator, Alert, TouchableOpacity, View} from "react-native";
import AppText from "../../components/AppText";
import colors from "../../components/colors";
import {AntDesign} from "@expo/vector-icons";
import routes from "../../navigation/routes";
import {ScrollView} from "react-native-gesture-handler";
import {useDispatch, useSelector} from "react-redux";
import {deleteUserAccount, getUser} from "../../redux/userSlice";
import {getUserId, removeToken} from "../../redux/token";
import AppButton from '../../components/AppButton';
import {logout} from '../../redux/authSlice';

const Profile = ({navigation}) => {
  const dispatch = useDispatch()
  const [isDeleting, setIsDeleting] = React.useState(false);

  useEffect(() => {
    const getUserProfile = async () => {
      const id = await getUserId();
      dispatch(getUser(id));
    };
    getUserProfile();

  }, [dispatch]);

  const {user, loading} = useSelector(state => state.user);

  const deleteUser = async () => {
    dispatch(deleteUserAccount(user._id))
    await removeToken();
  }

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      isDeleting ? 'Deleting your account...' : 'Are you sure you want to delete your account?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed')
        },
        {
          text: 'Yes',
          onPress: async () => {
            setIsDeleting(true);
            await deleteUser();
            dispatch(logout())
            setIsDeleting(false);
          }
        }
      ],
      {cancelable: true}
    );
  }

  const ProfileContent = () => (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          marginBottom: 6,
          padding: 10,
          borderBottomColor: colors.gray
        }}
      >
        <AppText size={14}>Group</AppText>

        <View style={{
          flexDirection: "row",
        }}>
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
          borderBottomWidth: 1,
          marginBottom: 6,
          padding: 10,
          borderBottomColor: colors.gray
        }}
      >
        <AppText size={14}>Email</AppText>

        <View style={{flexDirection: "row"}}>
          <AppText size={14}>{user?.email}</AppText>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          marginBottom: 6,
          padding: 10,
          borderBottomColor: colors.gray
        }}
      >
        <AppText size={14}>User Name</AppText>
        <View style={{flexDirection: "row"}}>
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
          borderBottomWidth: 1,
          marginBottom: 6,
          padding: 10,
          borderBottomColor: colors.gray
        }}
      >
        <AppText size={14}>First Name</AppText>
        <TouchableOpacity onPress={() => navigation.navigate(routes.EDIT_PROFILE)} style={{borderBottomColor: colors.black, borderBottomWidth: 1}}>

          <View style={{flexDirection: "row"}}>
            <AppText size={14}>{user?.firstName}</AppText>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          marginBottom: 6,
          padding: 10,
          borderBottomColor: colors.gray
        }}
      >
        <AppText size={14}>Last Name</AppText>
        <TouchableOpacity onPress={() => navigation.navigate(routes.EDIT_PROFILE)} style={{borderBottomColor: colors.black, borderBottomWidth: 1}}>
          <View style={{flexDirection: "row"}}>
            <AppText size={14}>{user?.lastName}</AppText>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          marginBottom: 6,
          padding: 10,
          borderBottomColor: colors.gray
        }}
      >

        <AppText size={14}>Phone Number</AppText>
        <TouchableOpacity onPress={() => navigation.navigate(routes.EDIT_PROFILE)} style={{borderBottomColor: colors.black, borderBottomWidth: 1}}>

          <View style={{flexDirection: "row"}}>
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
          padding: 10,
          paddingBottom: 10,
          justifyContent: "space-between",
          backgroundColor: colors.white,
        }}
      >
        <AppText size={14}>Notification Settings</AppText>
        <AntDesign name="arrowright" size={24} color="black" />
      </TouchableOpacity>


      <View style={{alignContent: 'center', padding: 10}}>
        <AppButton
          label={'Delete Account'}
          background={colors.primary}
          width={200} color={colors.white}
          onPress={handleDeleteAccount}
        />
      </View>
    </View>
  );

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      style={{
        flex: 1,
        width: "100%",
        flexDirection: "column",
      }}
    >
      {loading && !user ? <ActivityIndicator size="large" color={colors.primary} /> : <ProfileContent />}
    </ScrollView>
  );
}

export default Profile;
