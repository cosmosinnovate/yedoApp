import { View, StyleSheet, Image } from "react-native";
import icons from "../assets/Icons";
import colors from "./colors";
import AppText from "./AppText";
import CardItemView from "./CardItemView";
import ImageIcon from "./ImageIcon";


{/* CardListView */ }
export default function CardListView({image, title, color}) {    
    
    /// Create function to mark items complete
    return (
        <View style={[style.card, style.shadowProp]}>
            {/* Header */}
            <View style={style.header}>
                <ImageIcon source={image}/>
                <AppText mH={10} color={color} weight="600">{title}</AppText>
            </View>

            {/* Contents: Pass object data to each card item */}

            { [1,2].map((task, index) => ( <CardItemView key={index}/>)) }
        </View>
    )
}

// style 
const style=StyleSheet.create({
    card: {
        flexDirection: "column",
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 20,
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