import { View } from "react-native";
import AppText from "./AppText";
import colors from "./colors";

export default function TagFilterView({ title }) {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,

        marginRight: 10,
        // width: '100%',
        backgroundColor: "#99D9DD",
      }}
    >
      <AppText color={colors.black} weight={"600"} size={14}>
        {title}
      </AppText>
    </View>
  );
}
