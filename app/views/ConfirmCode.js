import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../components/colors";
import { CloseIcon } from "../assets/svgIcons/cliqueIcon";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { confirmCode } from "../redux/authSlice";
import { NumberInput } from "../components/NumberInput";
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  number1: Yup.string().required().length(1),
  number2: Yup.string().required().length(1),
  number3: Yup.string().required().length(1),
  number4: Yup.string().required().length(1),
  number5: Yup.string().required().length(1),
  number6: Yup.string().required().length(1),
});

function ConfirmCode({ navigation }) {
  const dispatch = useDispatch();
  const { auth, loading, error, success } = useSelector(state => state.auth);

  const sendVerificationCode = (values) => {
    const otpNumbers = parseInt(`${values.number1}${values.number2}${values.number3}${values.number4}${values.number5}${values.number6}`);
    dispatch(confirmCode({ otp: otpNumbers }));
  };

  return (
    <Screen>
      <Formik
        initialValues={{ number1: "", number2: "", number3: "", number4: "", number5: "", number6: "" }}
        validationSchema={validationSchema}
        onSubmit={sendVerificationCode}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={style.main}>
            {/* ... Other UI elements ... */}
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
          </View>
        )}
      </Formik>
    </Screen>
  );
}

// ... styles and exports ...
