import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import colors from "../components/colors";
import font from "./fontWeight";
import { isValidElement } from "react";

function AppButton( { onPress, disabled, label,
    width = '100%',
    color = colors.black,
    background = colors.yenoBlue,
    weight = font.normal,
  marginBottom = 10
}) {
  const renderLabel = () => {
    if (isValidElement(label)) {
      return label;
    }
    return <AppText style={{color: color, fontWeight: weight}}>{label}</AppText>;
  };

  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Button pressed");
        alert("Button pressed");
        onPress()
      }}
      style={[
        style.button,
        {
          backgroundColor: disabled ? colors.gray : background,
          width: width,
        },
      ]}
      disabled={disabled}
    >
      <View>{renderLabel()}</View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create( {
    button: {
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 20,
        padding: 10,
    marginVertical: 4,
    },
});

export default AppButton;
