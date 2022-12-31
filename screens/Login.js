import React from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../components/colors';
import { CloseIcon } from '../components/svgIcons/cliqueIcon';

function Login({ navigation }) {
    return (
        <Screen>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end'
            }} >
                <View style={{}}>
                    <TouchableOpacity onPress={() => navigation.pop()} >
                        <CloseIcon/>
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

                <TextInput
                    placeholder='Email'
                    style={{
                        height: 40,
                        fontSize: 18,
                        marginVertical: 10,
                        backgroundColor: '#F1F1F1',
                        borderColor: '#99D9DD', borderWidth: 1,
                        paddingHorizontal: 20,
                        borderRadius: 50,
                    }} />

                <TouchableOpacity
                    style={[style.button, { backgroundColor: "#7289DA" }]}
                    onPress={() => navigation.navigate('ConfirmCode')}>
                    <AppText color={"white"}>Login</AppText>
                </TouchableOpacity>

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
        </Screen>
    );
}

const style=StyleSheet.create({
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