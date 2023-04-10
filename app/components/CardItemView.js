import { View, StyleSheet, Image } from "react-native";
import icons from "../assets/Icons";
import colors from "./colors";
import AppText from "./AppText";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";
import { Swipeable } from "react-native-gesture-handler";

export default function CardItemView({
    creator="Creator",
    createdAt="Nov 22, 2022",
    title,
    description,
    renderRightActions
}) {
    const [status, setStatus]=useState(false)
    return (
        <Swipeable renderRightActions={renderRightActions} animationOptions={{}}>
            <View style={style.item}>
                <BouncyCheckbox
                    size={24}
                    fillColor={colors["black"]}
                    innerIconStyle={{ borderWidth: 2 }}
                    unfillColor={'transparent'}
                    onPress={(isChecked) => {
                        setStatus(() => isChecked);
                        console.log(isChecked)
                    }} />
                <View style={[style.contentItems]}>
                    <View style={style.divider} />
                    <View style={style.contentBody}>
                        <AppText size={18} color={colors["darkGray"]}>
                            {creator} |  {createdAt}
                        </AppText>
                        <AppText color={colors["black"]} textDecoration={status? "line-through":"none"}>
                            {title}
                        </AppText>
                    </View>
                </View>
            </View>
        </Swipeable>
    )
}

const style=StyleSheet.create({
    item: {
        marginVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    image: {
        width: 24,
        height: 24,
    },
    contentItems: {
        flexDirection: "row",
        alignItems: "center"
    },
    contentBody: {
        flexDirection: "column",
    },
    divider: {
        height: 40,
        width: 2,
        marginRight: 15,
        backgroundColor: colors.cliqueBlue,
    }
});