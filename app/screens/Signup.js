import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../components/colors';
import { CloseIcon } from '../components/svgIcons/cliqueIcon';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import route from '../navigation/route';

function Signup({ navigation }) {
    const [email, setEmail]=useState('');
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
                    }}>Sign Up</AppText>

                    <AppInput
                        placeholder='Email'
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />

                    <AppButton 
                        label={'Sign Up'} 
                        background={colors.primary} 
                        color={colors.white} 
                        onPress={() => navigation.navigate(route.CONFIRM_CODE)}
                    />

                    <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row', marginVertical: 20
                    }}>
                        <AppText color={colors.black}>Got an account?</AppText>
                        <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            onPress={() => navigation.navigate('Login')}>
                            <AppText color={colors.black}>Login here</AppText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Screen>
    );
}

const style=StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 15,
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

export default Signup;