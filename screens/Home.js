import { useState } from "react";
import { Animated, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icons from "../assets/Icons";
import AppInput from "../components/AppInput";
import AppText from "../components/AppText";
import CardListView from "../components/CardListView";
import ImageIcon from "../components/ImageIcon";
import Screen from "../components/Screen";
import colors from "../components/colors";
import CategoryNavigator from '../navigation/CategoryNavigator';

export default function Home({ navigation }) {
    const [selected, setSelected]=useState('Todo');
    const [searchText, setSearchText]=useState('');

    const choiceCategory=(value) => {
        setSelected(value)
    }

    return (
        <Screen>
            <ScrollView style={{ height: '100%' }} automaticallyAdjustKeyboardInsets={true}>
                <View style={{ height: '100%' }}>
                    <View style={style.topNav}>
                        <AppText
                            color={colors.black}
                            size={26}
                            weight="800">Hello, Taban</AppText>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <ImageIcon source={Icons.userImage1} height={50} width={50} />
                        </TouchableOpacity>
                    </View>


                    <View style={style.main}>
                        <AppInput
                            placeholder={'Search tasks'}
                            onChangeText={(text) => setSearchText(text)}
                            value={searchText}
                        />
                        {/* List of tasks */}
                        <CategoryNavigator onPress={(e) => choiceCategory(e)} value={selected} />

                    </View>

                    <View style={{ flex: 1 }}>
                        {/* Select categories */}
                        {selected==='Todo'&&<View>
                            <CardListView title={'Today'} image={Icons.calendar} />
                            <CardListView title={'Tomorrow'} image={Icons.calendar} />
                            <CardListView title={'Up coming'} image={Icons.calendar} />

                        </View>
                        }
                        {selected==='Completed'&&<View>
                            <CardListView title={'Completed'} image={Icons.calendar} />
                        </View>
                        }
                        {selected==='Continuous'&&<View>
                            <CardListView title={'Continuous'} image={Icons.calendar} />
                        </View>
                        }
                    </View>
                </View>
            </ScrollView>
        </Screen>
    )
}

const style=StyleSheet.create({
    topNav: {
        flexDirection: "row",
        width: "100%",
        padding: 15,
        justifyContent: "space-between",
        alignItems: 'center',
    },
    main: {
        padding: 15,
    },
});