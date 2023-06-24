import React from "react";
import {
  Button,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../components/colors";
import ImageIcon from "../components/ImageIcon";
import icons from "../assets/Icons";

function TopNav({ children, title = "" }) {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 0,
          alignContent: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            width: "100%",
            flex: 2,
            padding: 10,
          }}
        >
          <AppText weight="500" mV={10} size="24">
            {title}
          </AppText>
        </View>
      </View>
      {children}
    </View>
  );
}

export default TopNav;
