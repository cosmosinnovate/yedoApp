import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import colors from "../components/colors";

function AppButton({ title, color="#000" }) {

  return (
    <TouchableOpacity 
    style={[style.button, { backgroundColor: colors[color]}]} onPress={() => {
      console.log("Tabbed")
    }}>
      <AppText color={"white"}>{title}</AppText>
    </TouchableOpacity>
  );
}

// Style
const style=StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 25,
    height: 50,
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.primary,
    marginVertical: 10,
  },
});

export default AppButton;
