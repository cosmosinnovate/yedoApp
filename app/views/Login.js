import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { CloseIcon } from "../assets/svgIcons/cliqueIcon";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import EmailInput from "../components/EmailInput";
import Screen from "../components/Screen";
import Spinner from "../components/Spinner";
import colors from "../components/colors";
import useAuth from "../hooks/hooks.useAuth";
import routes from "../navigation/routes";
import { storeJWToken } from "../services/store/store.token";

function Login({ navigation }) {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const { login, data, authLoading } = useAuth();

  useEffect(() => {
    if (email) setError("");
  });

  const saveToken = async (token) => {
    await storeJWToken(token);
  };

  useEffect(() => {
    if (data) {
      if (data?.statusCode === 201) {
        saveToken(data?.data?.jwToken)
        navigation.navigate(routes.CONFIRM_CODE);
      } else {
        setError(data.message);
      }
    }
  }, [data, authLoading]);


  const submitLogin = async () => {
    const userInfo = {
      email: email,
    };
    if (email) {
      await login(userInfo);
    } else {
      setError("Please enter email");
    }
  }

  return (
    <Screen>
      <View style={style.main}>
        <View
          style={{
            display: "flex",

            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <View style={{}}>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            alignContent: "center",
            marginTop: 50,
            // justifyContent: "center",
          }}
        >
          <AppText
            style={{
              alignSelf: "center",
              fontSize: 30,
              fontWeight: "500",
              marginBottom: 20,
            }}
          >
            Login
          </AppText>

          {error && (
            <AppText
              style={{
                alignSelf: "center",
                fontSize: 18,
                fontWeight: "500",
                color: colors.primary,
                marginBottom: 20,
              }}
            >
              {error}
            </AppText>
          )}

          <EmailInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <AppButton
            background={colors.primary}
            label={authLoading ? <Spinner /> : 'Login'}
            color={colors.white}
            onPress={() => submitLogin()}
          />

          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <AppText color={colors.black}>You don't have an account?</AppText>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.navigate("SignUp")}
            >
              <AppText color={colors.black}>Sign up</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const style = StyleSheet.create({
  main: {
    paddingHorizontal: 15,
    flex: 1,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 25,
    height: 40,
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
});

export default Login;
