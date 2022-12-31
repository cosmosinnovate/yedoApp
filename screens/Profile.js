import React,
{ useState } from 'react';
import { Button, TouchableOpacity, View, StyleSheet, Switch } from 'react-native';
import AppText from '../components/AppText';
import AppButton from "../components/AppButton";
import colors from '../components/colors';
import ImageIcon from '../components/ImageIcon';
import icons from "../assets/Icons";
import Icons from '../assets/Icons';
import Screen from '../components/Screen';
import { AntDesign } from '@expo/vector-icons';
import AppInput from '../components/AppInput';
import route  from '../navigation/route';


function Profile({ navigation }) {
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('')
    const [email, setEmail]=useState('')
    const [phonNumber, setPhoneNumber]=useState('')

    return (
        <Screen>
            <View style={{ flex: 1, width: "100%", flexDirection: 'column' }}>
                <View style={{ marginBottom: 20 }}>
                    <AppText color={colors.black} size={24} weight="800">Profile</AppText>
                </View>
                <View style={{ marginBottom: 20, alignItems: 'center' }}>
                    <ImageIcon source={Icons.userImage1} height={100} width={100} />
                    {/* <AntDesign name="pluscircle" size={24} color="black" style={{ bottom: -10, position: 'absolute' }} /> */}
                </View>
                <AppInput
                    label={'First Name'}
                    placeholder='Name'
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                />
                <AppInput
                    label={'Last Name'}
                    placeholder='Doe'
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                />
                <AppInput
                    label={'Email'}
                    placeholder='john.doe@gmail.com'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <AppInput
                    label={'Phone Number'}
                    placeholder='(245) 232-2321'
                    onChangeText={(text) => setPhoneNumber(text)}
                    value={phonNumber}
                />
                <View style={{
                    flexDirection: 'column',
                    marginBottom: 40,
                    backgroundColor: colors.white
                }}>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate(route.SETTING)}
                    style={{
                        flexDirection: 'row',
                        marginBottom: 10,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomColor: colors.gray,
                        borderEndColor: colors.white,
                        borderLeftColor: colors.white,

                        borderTopColor: colors.gray,
                        borderWidth: 1,

                        justifyContent: 'space-between',
                        backgroundColor: colors.white
                    }}>
                    <AppText>Notification Settings</AppText>
                    <AntDesign name="arrowright" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </Screen>
    );
}

export default Profile;