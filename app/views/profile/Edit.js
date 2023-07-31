import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import colors from "../../components/colors";
import AppInput from "../../components/AppInput";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import routes from "../../navigation/routes";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../redux/userSlice";
import { getUserId } from "../../utils/token";

function Edit({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState();
  const [phoneNo, setPhoneNo] = useState("");
  const [originalData, setOriginalData] = useState({ firstName: '', lastName: '', phoneNo: '' });
  const { user, loading } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserProfile = async () => {
      const id = await getUserId();
      dispatch(getUser(id));
    }

    getUserProfile();
    return () => {
      getUserProfile();
    };
  }, [getUser]);

  useEffect(() => {
    const { firstName, lastName, phoneNo } = user;
    setFirstName(firstName ? firstName : "");
    setLastName(lastName ? lastName : "");
    setPhoneNo(phoneNo ? phoneNo : "");
    setOriginalData({ firstName, lastName, phoneNo });
  }, [user])

  async function handleSaveChanges() {

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
      const id = await getUserId();

      // Pass user Id
      dispatch(updateUser(
        {
          data: { 
            firstName: firstName,
            lastName: lastName,
            phoneNo: phoneNo, 
          },
          id,
        }
      ));
    } else { }
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
