import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import colors from "../components/colors";
import FontWeight from "./fontWeight";

function AppSelectButton({ onPress,
  label,
  icon,
  size = 18,
  color = colors.black,
  background = colors.black,
  fontWeight = FontWeight.normal,
  flex = 1,
  borderColor = 'transparent',
  borderRadius,
  ...otherProps }) {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style.button, {
        backgroundColor: background,
        borderBottomColor: borderColor,
        borderBottomWidth: 2,
        // borderBottomRightRadius: borderRadius,
        // borderBottomLeftRadius: borderRadius
      }]}
      {...otherProps}
    >
      <View style={style.content}>
        {icon && <View style={{ marginRight: 4 }}>{icon}</View>}
        <AppText color={color} weight={fontWeight} size={size}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );

}
const style = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 1,
    height: 40,
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    // borderRadius: 20,
    height: 40,
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  }
});

export default AppSelectButton;