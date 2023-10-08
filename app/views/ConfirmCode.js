
import React from "react";
import {Alert, StyleSheet, TouchableOpacity, View} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../components/colors";
import {CloseIcon} from "../assets/svgIcons/yenoIcon";
import Spinner from "../components/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {confirmCode, resetError} from "../redux/authSlice";
import NumberInput from "../components/NumberInput";
import {Formik} from 'formik';
import * as Yup from 'yup';
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  number1: Yup.string().required().length(1),
  number2: Yup.string().required().length(1),
  number3: Yup.string().required().length(1),
  number4: Yup.string().required().length(1),
  number5: Yup.string().required().length(1),
  number6: Yup.string().required().length(1),
});

// Validate schema 

function ConfirmCode({navigation}) {
  const dispatch = useDispatch();
  const {auth, loading, error, success} = useSelector(state => state.auth);

  console.log('Error', error)

  const sendVerificationCode = (values) => {
    const otp = parseInt(`${values.number1}${values.number2}${values.number3}${values.number4}${values.number5}${values.number6}`);
    dispatch(confirmCode(otp));
  };

  if (error) {
    Alert.alert(
      'Error',
      `${error}`,
      [
        {
          text: 'OK',
          onPress: () => dispatch(resetError())
        }
      ],
      {cancelable: true}
    );
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
          <View>
            <TouchableOpacity onPress={() => navigation.navigate(routes.REGISTER)} >
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

          <Formik
            initialValues={{number1: "", number2: "", number3: "", number4: "", number5: "", number6: ""}}
            validationSchema={validationSchema}
            onSubmit={sendVerificationCode}
          >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >

                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >

                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <NumberInput
                      key={num}
                      onChangeText={handleChange(`number${num}`)}
                      onBlur={handleBlur(`number${num}`)}
                      value={values[`number${num}`]}
                      error={errors[`number${num}`] && touched[`number${num}`] ? errors[`number${num}`] : ""}
                    />
                  ))}

                </View>
                <AppButton
                  label={loading ? <Spinner /> : "Confirm"}
                  background={colors.primary}
                  color={colors.white}
                  onPress={handleSubmit}
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
                    style={{marginLeft: 10}}
                    onPress={() => console.log("Resend Code")}
                  >
                    <AppText color={colors.black}>Request again</AppText>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
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
