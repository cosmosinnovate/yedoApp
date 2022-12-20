import { View } from "react-native";
import AppText from "./AppText";
import colors from "./colors";

export default function TagFilterView({ title }) {
    return (
        <View style={{
            borderRadius: 10,
            padding: 10,
            marginHorizontal: 10,
            backgroundColor: colors.white,
            borderLeftColor: colors.green,
            borderStartWidth: 2
        }}>
            <AppText color={colors.black}>{title}</AppText>
        </View>)
}

