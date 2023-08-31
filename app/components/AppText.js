import React from "react";
import { Text } from "react-native";

function AppText({ children, mH=0, mV=0, color, weight="400", size=16, textAlign='center', textDecoration="none", ...other }) {
  return (
    <Text
      style={[{ marginHorizontal: mH, marginVertical: mV }, {
        fontSize: size,
        textAlign: textAlign,
        fontWeight: weight,
        fontFamily: Platform.OS==="android"? "Roboto":"Avenir",
      }, { color: color, textDecorationLine: textDecoration }]}
      {...other}>
      {children}
    </Text>
  );
}

export default AppText;
