import { View, StyleSheet } from "react-native";
import icons from "../assets/Icons";
import colors from "./colors";
import AppText from "./AppText";
import CardItemView from "./CardItemView";
import ImageIcon from "./ImageIcon";

export default function CardListView({ image, title, color }) {
    return (
        <View style={[style.card]}>
            {/* Header */}
            <View style={style.header}>
                <AppText color={color} weight="600">{title}</AppText>
            </View>
            {/* Contents: Pass object data to each card item */}
            {[1, 2].map((task, index) => (<CardItemView key={index} />))}
        </View>
    )
}

// style 
const style=StyleSheet.create({
    card: {
        flexDirection: "column",
        backgroundColor: "#FFFFF",
        borderRadius: 10,
        width: "100%",
        marginVertical: 10
    },
    shadowProp: {
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.04,
        shadowRadius: 10,
    },
    header: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
        marginBottom: 10,
    },
});