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
  borderRadius = 10,
  marginVertical,
  marginBottom = 10,
  paddingHorizontal = 10,
  padding = 10,
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
          fontSize: 16,
          color: colors.black,
          borderRadius: 10,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginBottom: 10,
          backgroundColor: inputBackgroundColor,
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
        {...other}
      />
      {!!error && (
        <AppText size={14} weight={"600"} color={'red'}>{error}</AppText>
      )}
    </View>
  );
}

export default AppInput;
