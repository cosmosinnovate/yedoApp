import { StyleSheet, View } from "react-native";
import ListItemDelete from '../components/ListItemDelete';
import CardItemView from "./CardItemView";
import AppText from "./AppText";


export default function CardListView({image, color, category, subCategory, data}) {
    return (
        <View style={style.card}>
                <View style={style.header}>
                    <View style={{marginRight: 10}}>
                        {category}
                    </View>
                    <AppText weight="600" size={24}>{subCategory}</AppText>
                </View>

            {data && data.reverse().map((task, idx) => (
                <CardItemView
                    key={idx}
                    item={task}
                    renderRightActions={() => <ListItemDelete />}
                />
            ))}

{/* <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={() => setPage(prevPage => prevPage + 1)}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() => loading && <ActivityIndicator size="large" color="#0000ff" />}
      renderItem={({ item }) => (
        <CardItemView
        key={idx}
        item={item}
        renderRightActions={() => <ListItemDelete />}
    />
      )}
    /> */}
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
        marginVertical: 5
    },
    category: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    shadowProp: {
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.04,
        shadowRadius: 10,
    },
    header: {
        paddingLeft: 15,
        flexDirection: "row",
        width: "100%",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: "flex-start",
    },
});