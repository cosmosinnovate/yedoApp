import React from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { CloseIcon } from "../assets/svgIcons/yenoIcon";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import EmailInput from "../components/EmailInput";
import Screen from "../components/Screen";
import Spinner from "../components/Spinner";
import colors from "../components/colors";
import { login, resetError } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import PasswordInput from "../components/PasswordInput";
import { Formik } from 'formik';
import * as Yup from 'yup';
import routes from "../navigation/routes";

const validateLoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(4, 'Password too short').required('Password is required')
})

function Login({ navigation }) {
  const { auth, loading, error, success } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const submitForm = (values) => {
    dispatch(login(values));
  }

  if (error) {
    Alert.alert('Error', `${error}`,
      [
        {
          text: 'OK',
          onPress: () => dispatch(resetError())
        }
      ],
      { cancelable: true }
    );
  }

  console.log(error)

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
            <TouchableOpacity onPress={() => navigation.navigate(routes.WELCOME)} >
              <CloseIcon />
            </TouchableOpacity>
          </View>
        </View>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validateLoginSchema}
          onSubmit={submitForm}
          validateOnBlur={true}
          validateOnChange={true}
        >

          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'column'
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

              <EmailInput
                placeholder='Email'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email && touched.email ? errors.email : ''}
              />

              <PasswordInput
                placeholder='Password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password && touched.password ? errors.password : ''}
              />


              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginVertical: 20,
                }}
              >
                <AppButton
                  background={colors.primary}
                  label={loading ? <Spinner /> : 'Login'}
                  color={colors.white}
                  onPress={handleSubmit}
                />
                
                <AppText color={colors.black}>You don't have an account?</AppText>
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => navigation.navigate("Register")}
                >
                  <AppText color={colors.blue}>Register</AppText>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
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
