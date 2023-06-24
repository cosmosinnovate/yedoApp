import { View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import colors from "./colors";

export default function ListItemDelete({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style.container}>
        <AntDesign name="delete" size={24} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "red",
    alignContent: "center",
    alignItems: "center",
    width: 70,
    height: "100%",
  },
});
