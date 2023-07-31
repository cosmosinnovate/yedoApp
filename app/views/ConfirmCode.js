import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../components/colors";
import { CloseIcon } from "../assets/svgIcons/cliqueIcon";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { confirmCode } from "../redux/authSlice";
import { NumberInput } from "../components/NumberInput";

function ConfirmCode({ navigation }) {
  const [disabled, setDisabled] = useState(true);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");
  const [number5, setNumber5] = useState("");
  const [number6, setNumber6] = useState("");
  const dispatch = useDispatch();
  const { auth, loading } = useSelector(state => state.auth);
  
  useEffect(() => {
    if (
      (
        number1.toString() +
        number2.toString() +
        number3.toString() +
        number4.toString() +
        number5.toString() +
        number6.toString()
      ).length === 6
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [number1, number2, number3, number4, number5, number6]);

  const sendVerificationCode = async () => {
    if (
      (
        number1.toString() +
        number2.toString() +
        number3.toString() +
        number4.toString() +
        number5.toString() +
        number6.toString()
      ).length === 6
    ) {
      const otpNumbers = parseInt(
        number1.toString() +
        number2.toString() +
        number3.toString() +
        number4.toString() +
        number5.toString() +
        number6.toString()
      );

      dispatch(confirmCode({ otp: otpNumbers }));

    } else {
      setError("Please enter a valid code");
    }
  };
  const onChanged = (text) => {
    let newText = "";
    let numbers = "0123456789";
    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
    }
    setError("");
    return newText;
  };

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
            justifyContent: "center",
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
            Confirm Code
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

          {success && (
            <AppText
              style={{
                alignSelf: "center",
                fontSize: 18,
                fontWeight: "500",
                color: 'green',
                marginBottom: 20,
              }}
            >
              {success}
            </AppText>)
          }

          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <NumberInput
              onChangeText={(text) => setNumber1(() => onChanged(text))}
              value={number1}
            />
            <NumberInput
              onChangeText={(text) => setNumber2(() => onChanged(text))}
              value={number2}
            />
            <NumberInput
              onChangeText={(text) => setNumber3(() => onChanged(text))}
              value={number3}
            />
            <NumberInput
              onChangeText={(text) => setNumber4(() => onChanged(text))}
              value={number4}
            />
            <NumberInput
              onChangeText={(text) => setNumber5(() => onChanged(text))}
              value={number5}
            />
            <NumberInput
              onChangeText={(text) => setNumber6(() => onChanged(text))}
              value={number6}
            />
          </View>

          <AppButton
            disabled={disabled}
            label={authLoading ? <Spinner /> : "Confirm"}
            background={colors.primary}
            color={colors.white}
            onPress={sendVerificationCode}
          />

          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <AppText color={colors.black}>Didn't receive it?</AppText>

            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => console.log("Resend Code")}
            >
              <AppText color={colors.black}>Request again</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 15,
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

export default ConfirmCode;
