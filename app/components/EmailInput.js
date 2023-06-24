import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import colors from "./colors";

const EmailInput = ({
  label,
  onChangeText,
  placeholder,
  error,
  color,
  value,
  style,
  ...other
}) => {
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (text) => {
    const trimmedText = text.trim();
    const lowercaseText = trimmedText.toLowerCase();
    setIsValidEmail(validateEmail(lowercaseText));
    onChangeText(lowercaseText);
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
        onChangeText={handleEmailChange}
        placeholder={placeholder}
        value={value}
        style={[styles.input, style, !isValidEmail && styles.invalidEmail, {}]}
        {...other}
      />
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
  invalidEmail: {
    borderColor: "red",
    borderWidth: 1,
  },
});

export default EmailInput;
