import React from "react";
import { Text } from "react-native";

function AppText({ children, mH=0,mV=0, color, weight="400", size=18, textDecoration="none" }) {
  return (
    <Text
      style={[{ marginHorizontal: mH, marginVertical: mV }, {
        fontSize: size,
        fontWeight: weight,
        fontFamily: Platform.OS==="android"? "Roboto":"Avenir",
      }, { color: color, textDecorationLine: textDecoration }]}>
      {children}
    </Text>
  );
}

export default AppText;
