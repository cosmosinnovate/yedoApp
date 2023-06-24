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
  error,
  borderRadius = 20,
  color,
  ...other
}) {
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
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        style={{
          fontSize: 18,
          marginVertical: 5,
          color: colors.black,
          height: 40,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: colors.gray,
          paddingHorizontal: 16,
          // borderColor: error ? colors.primary : 'transparent', // Change red to your desired border color
          // borderWidth: 2, // Change 2 to your desired border width
          borderRadius: borderRadius ? borderRadius : 20,
        }}
        {...other}
      />
    </View>
  );
}

export default AppInput;
