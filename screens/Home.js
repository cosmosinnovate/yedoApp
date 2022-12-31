import { View, StyleSheet, ScrollView, TextInput } from "react-native";
import Icons from "../assets/Icons";
import AppText from "../components/AppText";
import CardListView from "../components/CardListView";
import colors from "../components/colors";
import ImageIcon from "../components/ImageIcon";
import CategoryNavigator from '../navigation/CategoryNavigator';
import { useState } from "react";
import AppInput from "../components/AppInput";


export default function Home({}) {
    const [selected, setSelected]=useState('Todo');
    const [searchText, setSearchText]=useState('');

    const choiceCategory=(value) => {
        console.log(value)
        setSelected(value)
    }

    return (
            <ScrollView style={{flex: 1, paddingTop: 60,padding: 10, backgroundColor: colors.white}}>
                <View style={style.topNav}>
                    <AppText
                        color={colors.black}
                        size={26}
                        weight="800">Hello, Taban</AppText>

                    <ImageIcon source={Icons.userImage1} height={50} width={50} />
                </View>
                {/* List of tasks */}
                <View style={style.main}>
                    <View style={style.main}>
                        <AppInput
                            placeholder={'Search tasks'}
                            onChangeText={(text) => setSearchText(text)}
                            value={searchText}
                        />
                    </View>
                    <CategoryNavigator onPress={(e) => choiceCategory(e)} value={selected} />
                    <View style={style.main}>
                        {/* Select categories */}
                        {selected==='Todo'&&<View>
                            <CardListView image={Icons.calendar} title="Today" />
                            <CardListView image={Icons.calendar} title="Tomorrow" />
                            <CardListView image={Icons.calendar} title="Up Coming" />

                        </View>
                        }
                        {selected==='Completed'&&<View>
                            <CardListView image={Icons.calendar} title="Completed" />
                        </View>
                        }
                        {selected==='Continuous'&&<View>
                            <CardListView image={Icons.calendar} title="Continuous" />
                        </View>
                        }
                    </View>
                </View>

            </ScrollView>
    )
}

const style=StyleSheet.create({
    topNav: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    main: {
        marginBottom: 26
    }
});