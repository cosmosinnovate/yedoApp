import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Modal, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import AppButton from "../components/AppButton";
import AppInput from '../components/AppInput';
import AppText from '../components/AppText';
import LineSeparator from '../components/LineSeparator';
import ListItemDelete from '../components/ListItemDelete';
import MemberCardView from '../components/MemberCardView';
import colors from '../components/colors';
import font from '../components/fontWeight';


const data=[
    { id: 1, firstName: 'Bree', lastName: 'Jules', role: 'Admin', profileUrl: '' },
    { id: 2, firstName: 'Taban', lastName: 'Cosmos', role: 'Admin', profileUrl: '' },
    { id: 3, firstName: 'Zuri', lastName: 'Cosmos', role: 'Member', profileUrl: '' },
]

function Member({ navigation }) {
    const [modalVisible, setModalVisible]=React.useState(false);
    const [email, setEmail]=useState('false');
    const [phoneNumber, setPhoneNumber]=React.useState('')

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={{ paddingRight: 10 }}
                    onPress={() => setModalVisible(() => true)}>
                    <AntDesign name='plus' size={24} />
                </TouchableOpacity>
            ),
        });
    }, [navigation, setModalVisible]);

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <Modal animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.content}>
                    <View style={styles.modalView}>
                        <View style={styles.topBar}>
                            <TouchableOpacity style={styles.close} onPress={() => setModalVisible(!modalVisible)}>
                                <AntDesign name='close' size={26} />
                            </TouchableOpacity>
                            <AppButton color={colors.white} background={colors.primary} width={80} onPress={() => setModalVisible(!modalVisible)} label='Invite' />
                        </View>

                        <View style={{ top: 20 }}>
                            <View style={{ alignItems: 'center' }}>
                                <AppText size={20} weight={font.medium}>Invite New Member</AppText>
                            </View>
                            <AppInput
                                placeholder='john.doe@jdoe.com'
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                            />
                            <View style={{ alignItems: 'center', marginVertical: 10 }}>
                                <AppText weight={font.medium}>Or</AppText>
                            </View>
                            <AppInput
                                placeholder='(245) 232-2321'
                                onChangeText={(text) => setPhoneNumber(text)}
                                value={phoneNumber}
                            />
                            <View style={{
                                flexDirection: 'column',
                                marginBottom: 40,
                                backgroundColor: colors.white
                            }}>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>

            {data.map(item => (
                <MemberCardView
                   key={item.id}
                    padding={15}
                    member={item}
                    renderRightActions={() => <ListItemDelete />}
                    onPress={() => {
                        console.log('selected')
                    }} />
            ))}
        </ScrollView>
    );
}

const styles=StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    topBar: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    modalView: {
        flex: 1,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        width: '100%',
        top: 20,
        shadowColor: "#000",
        shadowRadius: 4,
        elevation: 5
    },
    close: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        top: 10,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default Member;
