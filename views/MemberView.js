import React,
{ useState } from 'react';
import { Button, TextInput, TouchableOpacity, View, StyleSheet, Switch, Modal, Pressable } from 'react-native';
import AppText from '../components/AppText';
import AppButton from "../components/AppButton";
import colors from '../components/colors';
import ImageIcon from '../components/ImageIcon';
import icons from '../assets/Icons';
import Screen from '../components/Screen';
import { Linking } from 'react-native';
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';
import MemberCardView from '../components/MemberCardView'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import AppInput from '../components/AppInput';
import route from '../navigation/route';

const data=[
    { id: 1, firstName: 'Bree', lastName: 'Jules', role: 'Admin', profileUrl: '' },
    { id: 2, firstName: 'Taban', lastName: 'Cosmos', role: 'Admin', profileUrl: '' },
    { id: 3, firstName: 'Zuri', lastName: 'Cosmos', role: 'Member', profileUrl: '' },
]

function MemberView({ navigation }) {
    const [modalVisible, setModalVisible]=React.useState(false);
    const [phoneNumber, setPhoneNumber]=React.useState('')

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => setModalVisible(true)} title="Invite" />
            ),
        });
    }, [navigation, setModalVisible]);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.content}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.close} onPress={() => setModalVisible(!modalVisible)}>
                            <AntDesign name='close' size={26} />
                        </TouchableOpacity>

                        <AppText size={26}>Invite</AppText>

                        <AppInput
                            label={'Phone Number'}
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
                        <AppButton onPress={() => setModalVisible(!modalVisible)} label='Invite' />
                    </View>
                </View>
            </Modal>


            {data.map((item, key) =>
                <MemberCardView
                    key={key}
                    padding={10}
                    member={item}
                    onPress={() => {
                        // Do something here?
                        console.log('selected')
                    }} />
            )}
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
    modalView: {
        flex: 1,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        width: '100%',
        top: 20,
        shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    close: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
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

export default MemberView;
