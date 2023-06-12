import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import colors from "../../components/colors";
import AppInput from "../../components/AppInput";
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../../services/store/store.context";
import useAuth from "../../hooks/hooks.useAuth";
import { AntDesign } from "@expo/vector-icons";
import routes from "../../navigation/routes";

function Edit({ navigation }) {
  const { user } = useContext(AuthContext);
  const { data, updateUser } = useAuth(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState();
  const [groupName, setGroupName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  useEffect(() => {
    console.log("user", user);
    setFirstName(data?.firstName ? data?.firstName : "");
    setLastName(data?.lastName ? data?.lastName : "");
    setPhoneNo(data?.phoneNo ? data?.phoneNo : "");
  }, [data]);

  async function handleSaveChanges() {
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

      <AppInput
        placeholder="First Name"
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
    </ScrollView>
  );
}

export default Edit;
