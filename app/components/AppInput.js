import React, { useState, useEffect } from "react";
import { View, TextInput, Keyboard, KeyboardAvoidingView } from "react-native";
// import colors from './colors';
import AppText from "./AppText";
import colors from "./colors";

function AppInput({
  label,
  value,
  width,
  placeholder,
  onChangeText,
  inputBackgroundColor = colors.gray,
  error,
  borderRadius = 20,
  bbrr = 20,
  bblr = 20,
  btrr = 20,
  btlr = 20,
  color = 20,
  marginVertical,
  marginBottom = 10,
  paddingHorizontal = 16,
  padding = 16,
  ...other
}) {
  return (
    <View
      style={{
        flexDirection: "column",
        marginBottom: marginBottom,
        backgroundColor: colors.white,
      }}
    >

      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        style={{
          fontSize: 18,
          marginVertical: marginVertical,
          color: colors.black,
          height: 40,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: inputBackgroundColor,
          paddingHorizontal: paddingHorizontal,
          borderRadius: borderRadius,
          borderBottomRightRadius: bbrr,
          borderBottomLeftRadius: bblr,
          borderTopRightRadius: btrr,
          borderTopLeftRadius: btlr,
        }}
        {...other}
      />
    </View>
  );
}

export default AppInput;
