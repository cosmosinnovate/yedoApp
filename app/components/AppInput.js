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
  bbrr = 10,
  bblr = 10,
  btrr = 10,
  btlr = 10,
  color = 10,
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
          fontSize: 14,
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
      {!!error && (
        <AppText size={16} weight={"600"} color={'red'}>{error}</AppText>
      )}
    </View>
  );
}

export default AppInput;
