import { ScrollView, View } from "react-native";
import Icons from "../assets/Icons";
import AppText from "./AppText";
import colors from "./colors";
import ImageIcon from "./ImageIcon";
import TagFilterView from "./TagFilterView";

export default function TagFilterListView() {
    return (
        <View style={{ flexDirection: "column", marginVertical: 20 }}>
            <View style={{ flexDirection: "row", marginVertical: 10, }}>
                <ImageIcon source={Icons.filter} />
                <AppText>Filter</AppText>
            </View>
            <ScrollView
                horizontal={true}
                style={{
                    borderRadius: 10,
                    flexDirection: "column",
                    borderLeftColor: colors.green
                }}>

                {[1, 2, 3, 4, 4, 4].map((tag, index) => (<TagFilterView title="Birthday" key={index}/>))}

            </ScrollView>
        </View>
    )
}

