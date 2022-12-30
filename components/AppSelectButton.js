import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import colors from "../components/colors";
import FontWeight from "./fontWeight";

function AppSelectButton({ onPress, label, color="#000", background=colors.black, fontWeight=FontWeight.normal, flex = 1 }) {
  return (
    <TouchableOpacity onPress={onPress} style={[style.button, { backgroundColor: background }]}>
      <AppText color={color} weight={fontWeight}>{label}</AppText>
    </TouchableOpacity>
  );
}
const style=StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 25,
    height: 40,
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
});

export default AppSelectButton;