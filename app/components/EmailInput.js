import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import colors from "./colors";
import AppText from "./AppText";

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
      {!!error && (
        <AppText size={14} weight={"600"} color={'red'}>{error}</AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    color: colors.black,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray,
    paddingHorizontal: 10,
    paddingVertical: 10,

  },
  invalidEmail: {
    borderColor: "red",
    borderWidth: 1,
  },
});

export default EmailInput;
