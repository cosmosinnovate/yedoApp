import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import colors from "../components/colors";
import font from "./fontWeight";
import { isValidElement } from "react";

function AppButton( { onPress, disabled, label,
    width = '100%',
    color = colors.black,
    background = colors.cliqueBlue,
    weight = font.normal
}) {
    const renderLabel = () => {
        if (isValidElement(label)) {
          return label;
        }
        return (
          <AppText color={disabled ? colors.darkGray : color} weight={weight}>
            {label}
          </AppText>
        );
    };
    
    return (
        <TouchableOpacity onPress={() => onPress() }
            style={ [style.button,
            {
                backgroundColor: disabled ? colors.gray : background,
                width: width
            }] }
            disabled={disabled}>
        <View>{renderLabel()}</View>
        </TouchableOpacity>
    );
}
const style = StyleSheet.create( {
    button: {
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 25,
        height: 40,
        alignContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
} );

export default AppButton;
