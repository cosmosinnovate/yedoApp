import React, { useContext, useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../components/colors';
import { CloseIcon } from '../assets/svgIcons/cliqueIcon';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import userClient from '../services/api/api.client.user';
import jwtDecode from 'jwt-decode';
import storage from '../services/store/store.token';
import { AuthContext } from '../services/store/store.context';
import routes from '../navigation/routes';
import useAuth from '../hooks/useAuth';

function CreateGroup({ route, navigation }) {
    const authContext = useContext(AuthContext);
    const [error, setError]=useState('');
    const [name, setGroupName]=useState('');
    const [loginFailed, setLoginFailed]=useState(false);
    const { registerUser, data, dataError } = useAuth()
    const { paramData } = route.params

    useEffect(() => {
        console.log("USE-EFFECT")
        if (name) setError("")
    });

    async function handleCompleteRegistration() {
        const userInfo = {
            name,
            ...paramData
        };

        if (paramData.firstName && paramData.lastName && paramData.email) {
            await registerUser(userInfo);
            if (!dataError) {
                authContext.setUser(data);
            } else {
                console.log(JSON.stringify(data, null, 2));
            }
        } else {
            setError('Please enter name')
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
                    justifyContent: "center",
                }}>
                    {/* TODO: Add visual representation of group */}
                    <AppText style={{
                        alignSelf: 'center',
                        fontSize: 30,
                        fontWeight: '500',
                        marginBottom: 20
                    }}>Create Group </AppText>

                    <AppText style={{
                        alignSelf: 'center',
                        fontSize: 18,
                        fontWeight: '500',
                        marginBottom: 16
                    }}>(Optional for personal use)</AppText>


                    {error ? <AppText style={{
                        alignSelf: 'center',
                        fontSize: 18,
                        fontWeight: '500',
                        color: colors.primary,
                        marginBottom: 20
                    }}>{error}</AppText> : <View/>}

                    <AppInput
                        placeholder="Group Name eg. TheCosmos'"
                        onChangeText={(text) => setGroupName(text)}
                        value={name}
                    />
                    <AppButton 
                        background={colors.primary} 
                        label={'Complete registration'} 
                        color={colors.white} 
                        onPress={() => handleCompleteRegistration()}/>

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

export default CreateGroup;