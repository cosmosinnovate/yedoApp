import React, { useContext, useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../components/colors';
import { CloseIcon } from '../assets/svgIcons/cliqueIcon';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';
import EmailInput from '../components/EmailInput';
import client from '../services/api/api.client.auth';
import jwtDecode from 'jwt-decode';
import storage from '../services/store/store.token';
import { AuthContext } from '../services/store/store.context';
import useAuth from '../hooks/useAuth';

function Login({ navigation }) {
    const authContext = useContext(AuthContext);
    const [error, setError]=useState('');
    const [email, setEmail]=useState('');
    const [loginFailed, setLoginFailed]=useState(false);
    const { logUser, data, dataError  } = useAuth();

    useEffect(() => {
        if (email) setError("")
    });

    async function login() {
        const userInfo = {
            email: email
        };
        if (email) {
            await logUser(userInfo);
            if (!error) {
                navigation.navigate(routes.CONFIRM_CODE);
            } else {
                setLoginFailed(true);
            }

        } else {
            setError('Please enter email')
        }
    }

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
                    marginTop: 50,
                    // justifyContent: "center",
                }}>
                    <AppText style={{
                        alignSelf: 'center',
                        fontSize: 30,
                        fontWeight: '500',
                        marginBottom: 20
                    }}>Login</AppText>

                    {error ? <AppText style={{
                        alignSelf: 'center',
                        fontSize: 18,
                        fontWeight: '500',
                        color: colors.primary,
                        marginBottom: 20
                    }}>{error}</AppText> : <View/>}

                    {loginFailed ? <AppText style={{
                        alignSelf: 'center',
                        fontSize: 18,
                        fontWeight: '500',
                        color: colors.primary,
                        marginBottom: 20
                    }}>{error}</AppText> : <View/>}

                    <EmailInput
                        placeholder='Email'
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    <AppButton 
                        background={colors.primary} 
                        label={'Login'} 
                        color={colors.white} 
                        onPress={() => login()}/>

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