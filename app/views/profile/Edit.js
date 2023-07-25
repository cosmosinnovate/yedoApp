import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import colors from "../../components/colors";
import AppInput from "../../components/AppInput";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import routes from "../../navigation/routes";
import { getUser } from "../../services/api/api.client.user";

function Edit({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState();
  const [phoneNo, setPhoneNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [originalData, setOriginalData] = useState({ firstName: '', lastName: '', phoneNo: '' });

  useEffect(() => {
    React.useCallback(() => {
      setLoading(true)
      const getUserProfile = async () => {
        const { data } = await getUser(user?.id);
        if (data?.statusCode === 200) {
          const { firstName, lastName, phoneNo } = profile.data;
          setFirstName(firstName ? firstName : "");
          setLastName(lastName ? lastName : "");
          setPhoneNo(phoneNo ? phoneNo : "");
          setOriginalData({ firstName, lastName, phoneNo });
        }
        setProfile(data?.data);
      };

      getUserProfile();
      setLoading(false)

      return () => {
        getUserProfile();
      };
    }, [])
    getUserProfile();
  }, [profile, loading]);

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

      {loading && <ActivityIndicator />}

      {!loading && (
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
