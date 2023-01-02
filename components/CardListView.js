import { FlatList, StyleSheet, View } from "react-native";
import LineSeparator from '../components/LineSeparator';
import ListItemDelete from '../components/ListItemDelete';
import CardItemView from "./CardItemView";
import AppText from "./AppText";


const data=[
    { id: 1, title: 'Bring coffee', description: '', dateTime: {}, createdAt: 'Jan 01 2023', creator: 'Brittney', category: ['Food', 'Drink', 'Coffee'], type: 'Todo' },
    { id: 2, title: 'Bring coffee', description: '', dateTime: {}, createdAt: 'Jan 01 2023', creator: 'Brittney', category: ['Food', 'Drink', 'Coffee'], type: 'Todo' },
    { id: 3, title: 'Bring coffee', description: '', dateTime: {}, createdAt: 'Jan 01 2023', creator: 'Brittney', category: ['Food', 'Drink', 'Coffee'], type: 'Todo' },
    { id: 4, title: 'Bring coffee', description: '', dateTime: {}, createdAt: 'Jan 01 2023', creator: 'Brittney', category: ['Food', 'Drink', 'Coffee'], type: 'Todo' }
]

export default function CardListView({ image, color, title }) {
    return (
        <View style={style.card}>
            <View style={style.header}>
                <AppText weight="600">{title}</AppText>
            </View>
            {data.map(item => (
                <CardItemView
                    key={item.id}
                    creator={item.creator}
                    title={item.title}
                    createdAt={item.createdAt}
                    renderRightActions={() => <ListItemDelete />}
                />
            ))}
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
        justifyContent: "flex-start",
    },
});