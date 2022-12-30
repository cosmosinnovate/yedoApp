import { View, StyleSheet, Image } from "react-native";
import icons from "../assets/Icons";
import colors from "./colors";
import AppText from "./AppText";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";


{/* CardItemView */ }
export default function CardItemView({ createdBy="Member Name", createDate="Nov 22, 2022", title="Low on whole milk" }) {
    const [status, setStatus]=useState(false)
    return (
        <View style={style.item}>
            <BouncyCheckbox
                size={24}
                textComponent={
                    <View style={[style.contentItems]}>
                        <Image source={icons.line} style={{ height: 24,width:1, marginHorizontal: 10 }} />
                        <View style={style.contentBody}>
                            <AppText size={16} color={colors["darkGray"]}>{createdBy} |  {createDate}</AppText>
                            <AppText color={colors["black"]} textDecoration={status? "line-through":"none"}>{title}</AppText>
                        </View>
                    </View>
                }
                fillColor={colors["black"]}
                innerIconStyle={{ borderWidth: 2 }}
                unfillColor={'transparent'}
                onPress={(isChecked) => {
                    setStatus(() => isChecked);
                    console.log(isChecked)
                }} />
        </View>
    )
}

// style 
const style=StyleSheet.create({
    item: {
        marginVertical: 10,
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 10
    },
    contentItems: {
        flexDirection: "row",
        alignItems: "center"
    },
    contentBody: {
        flexDirection: "column",
    }
});