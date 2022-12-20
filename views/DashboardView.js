import { View, StyleSheet, ScrollView } from "react-native";
import Icons from "../assets/Icons";
import AppText from "../components/AppText";
import CardListView from "../components/CardListView";
import colors from "../components/colors";
import ImageIcon from "../components/ImageIcon";
import TagFilterListView from "../components/TagFilterListView";


export default function DashboardView({}) {
    return (
        <ScrollView
            stickyHeaderIndices={100}
            style={{
                padding: 20,
                width: `100%`
            }}>
            <View style={style.top}>
                <AppText color={colors.black} size={24} weight="500">Welcome, Taban</AppText>
                <ImageIcon source={Icons.search} />
            </View>

            {/* Tag Filter */}
            <TagFilterListView/>

            {/* List of tasks */}
            <CardListView image={Icons.calendar} title="Today" color={colors.blueIris} />
            <CardListView image={Icons.calendar} title="Tomorrow" color={colors.blueIris} />
            <CardListView image={Icons.complete} title="Complete" color={colors.green} />

        </ScrollView>
    )
}

const style=StyleSheet.create({
    top: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    }
});