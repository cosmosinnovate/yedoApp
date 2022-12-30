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
    { id: 4, firstName: 'Zuri', lastName: 'Cosmos', role: 'Member', profileUrl: '' },
    { id: 5, firstName: 'Zuri', lastName: 'Cosmos', role: 'Member', profileUrl: '' },
    { id: 6, firstName: 'Zuri', lastName: 'Cosmos', role: 'Member', profileUrl: '' },
    { id: 7, firstName: 'Zuri', lastName: 'Cosmos', role: 'Member', profileUrl: '' },
    { id: 8, firstName: 'Zuri', lastName: 'Cosmos', role: 'Member', profileUrl: '' },
    { id: 9, firstName: 'Zuri', lastName: 'Cosmos', role: 'Member', profileUrl: '' },
    { id: 10, firstName: 'Zuri', lastName: 'Cosmos', role: 'Member', profileUrl: '' },
]

function NotificationView({ navigation }) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
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

export default NotificationView;
