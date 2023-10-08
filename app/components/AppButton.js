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
    return (
        <TouchableOpacity onPress={() => onPress() }
            style={ [style.button,
            {
                marginBottom: marginBottom,
                backgroundColor: disabled ? colors.gray : background,
                width: width
            }] }
            disabled={disabled}>
        <View>{renderLabel()}</View>
      </TouchableOpacity>
    );
  };

  return (
    <TouchableOpacity
      onPress={() => onPress()}
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
    },
});

export default AppButton;
