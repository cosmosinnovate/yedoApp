import React from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../components/colors';
import { CloseIcon } from '../components/svgIcons/cliqueIcon';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import route from '../navigation/route';

function Login({ navigation }) {

    return (
        <Screen>
            <View style={style.main}>
                <View style={{
                    display: 'flex',

                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                }} >
                    <View style={{}}>
                        <TouchableOpacity onPress={() => navigation.pop()} >
                            <CloseIcon />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{
                    flex: 1,
                    alignContent: "center",
                    justifyContent: "center",
                }}>

                    <AppText style={{
                        alignSelf: 'center',
                        fontSize: 30,
                        fontWeight: '500',
                        marginBottom: 20
                    }}>Login</AppText>

                    <AppInput placeholder='Email' onChangeText={() => console.log('Login')} />
                    <AppButton background={colors.primary} label={'Login'} color={colors.white} onPress={() => navigation.navigate(route.CONFIRM_CODE)} />

                    <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row', marginVertical: 20
                    }}>
                        <AppText color={colors.black}>You don't have an account?</AppText>
                        <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            onPress={() => navigation.navigate('SignUp')}>
                            <AppText color={colors.black}>Sign up</AppText>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </Screen>
    );
}

const style=StyleSheet.create({
    main: {
        paddingHorizontal: 15,
        flex: 1,
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 25,
        height: 40,
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
    },
});

export default Login;