import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import colors from "./colors";
import AppText from "./AppText"; // Assuming you have this component in the same directory

const validatePassword = (password) => {
  const minLength = 6;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

  return password.length >= minLength &&
    hasUppercase &&
    hasLowercase &&
    hasDigit &&
    hasSpecialChar;
};

const PasswordInput = ({
  label,
  onChangeText,
  placeholder,
  error,
  color,
  value,
  style,
  ...other
}) => {
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handlePasswordChange = (text) => {
    setIsValidPassword(validatePassword(text));
    onChangeText(text);
  };

  return (
    <View
      style={{
        flexDirection: "column",
        marginBottom: 1,
        backgroundColor: colors.white,
      }}
    >
      {label ? (
        <AppText size={16} weight={"600"} color={color}>
          {label}
        </AppText>
      ) : null}

      <TextInput
        secureTextEntry={true} // This makes the TextInput hide characters for passwords
        onChangeText={handlePasswordChange}
        placeholder={placeholder}
        value={value}
        style={[
          styles.input,
          style,
          !isValidPassword && styles.invalidInput,
        ]}
        {...other}
      />
      {!!error && (
        <AppText size={16} weight={"600"} color={'red'}>{error}</AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    marginVertical: 5,
    color: colors.black,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray,
    paddingHorizontal: 16,
  },
  invalidInput: {
    borderColor: "red",
    borderWidth: 1,
  },
});

export default PasswordInput;
