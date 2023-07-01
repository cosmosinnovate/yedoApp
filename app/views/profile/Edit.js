import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import colors from "../../components/colors";
import AppInput from "../../components/AppInput";
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../../services/store/store.context";
import useUser from "../../hooks/hooks.useUser";
import { AntDesign } from "@expo/vector-icons";
import routes from "../../navigations/routes";
import { useFocusEffect } from "@react-navigation/core";

function Edit({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState();
  const [groupName, setGroupName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const { user } = useContext(AuthContext);
  const { userData, getUser, updateUser, userDataLoading } = useUser();
  const [originalData, setOriginalData] = useState({ firstName: '', lastName: '', phoneNo: '' });

  useEffect(() => {
    const getUserProfile = async () => {
      await getUser(user?.id);
    };
    getUserProfile();
  }, []);


  useEffect(() => {
    if (userData) {
      if (userData?.statusCode === 200) {
        const { firstName, lastName, phoneNo } = userData.data;
        setFirstName(firstName ? firstName : "");
        setLastName(lastName ? lastName : "");
        setPhoneNo(phoneNo ? phoneNo : "");
        // Save original data
        setOriginalData({ firstName, lastName, phoneNo });
      }
    }
  }, [userData, userDataLoading]);

  // Other code...

  async function handleSaveChanges() {
    // Compare current data and new data before save
    if (
      firstName !== originalData.firstName ||
      lastName !== originalData.lastName ||
      phoneNo !== originalData.phoneNo
    ) {

      if (!firstName) {
        setError("First Name is required");
        return;
      }
      if (!lastName) {
        setError("Last Name is required");
        return;
      }

      await updateUser({
        firstName,
        lastName,
        phoneNo,
      });
    } else {
    }
  }

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
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <AppText size={16}>Settings</AppText>
      </View>

      {userDataLoading && <ActivityIndicator />}

      {!userDataLoading && (
        <View>
          <AppInput
            placeholder={"First Name"}
            onChangeText={(text) => setFirstName(text)}
            error={error}
            value={firstName}
          />

          <AppInput
            placeholder="Last Name"
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />

          <AppInput
            placeholder="Phone Number"
            onChangeText={(text) => setPhoneNo(text)}
            value={phoneNo}
          />

          <AppButton
            width="100%"
            background={colors.primary}
            label={"Save Changes"}
            color={colors.white}
            onPress={() => handleSaveChanges()}
          />

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
      )}
    </ScrollView>
  );
}

export default Edit;
