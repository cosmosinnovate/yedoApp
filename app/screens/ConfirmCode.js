import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import AppButton from "../components/AppButton";
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../components/colors';
import { CloseIcon } from '../assets/svgIcons/cliqueIcon';
import useAuth from '../hooks/useAuth';

function ConfirmCode(props) {
    const [number1, setNumber1]=useState(0)
    const [number2, setNumber2]=useState(0)
    const [number3, setNumber3]=useState(0)
    const [number4, setNumber4]=useState(0)
    const [number5, setNumber5]=useState(0)    
    const [number6, setNumber6]=useState(0)
    const { data, verifyAccount, dataError } = useAuth();
    const [otp, setOtp]=useState('')
    const [error, setError]=useState('');

    const checkOtp = () => {
        if (number1 && number2 && number3 && number4 && number5 && number6) {
            setOtp(() => number1 + number2 + number3 + number4 + number5 + number6);
        }
    }

    const onChanged=(text) => {
        let newText='';
        let numbers='0123456789';
        for (var i=0;i<text.length;i++) {
            if (numbers.indexOf(text[i])>-1) {
                newText=newText+text[i];
            }
        }
        setError('')
        return newText;
    }

    const sendVerificationCode = async () => {
        checkOtp()
        console.log(otp)
        if (otp) {
            await verifyAccount({ otp: parseInt(otp) });
            console.log("Data: ", data)
            if (!dataError) {
                props.setAuthenticated(data)
                return
            } else {
                setError(data.message);
                return
            }
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
                        <TouchableOpacity onPress={() => props.navigation.pop()} >
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
                    }}>Confirm Code</AppText>

                    {error ? <AppText style={{
                        alignSelf: 'center',
                        fontSize: 18,
                        fontWeight: '500',
                        color: colors.primary,
                        marginBottom: 20
                    }}>{error}</AppText> : <View/> }

                    <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <NumberInput onChangeText={(text) => setNumber1(() => onChanged(text))} value={number1} />
                        <NumberInput onChangeText={(text) => setNumber2(() => onChanged(text))} value={number2} />
                        <NumberInput onChangeText={(text) => setNumber3(() => onChanged(text))} value={number3} />
                        <NumberInput onChangeText={(text) => setNumber4(() => onChanged(text))} value={number4} />
                        <NumberInput onChangeText={(text) => setNumber5(() => onChanged(text))} value={number5} />
                        <NumberInput onChangeText={(text) => setNumber6(() => onChanged(text))} value={number6} />
                    </View>

                    <AppButton label={'Confirm Code'} background={colors.primary} color={colors.white} 
                    onPress={() => sendVerificationCode()}/>

                    <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row', marginVertical: 20
                    }}>
                        <AppText color={colors.black}>Didn't receive it?</AppText>

                        <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            onPress={() => console.log("Resend Code")}>
                            <AppText color={colors.black}>Request again</AppText>
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

export default ConfirmCode;


const NumberInput=({ onChangeText, value }) =>
    <TextInput
        accessibilityHint='number'
        placeholder='1'
        keyboardType="number-pad"
        onChangeText={onChangeText}
        maxLength={1}
        value={value}
        style={{
            backgroundColor: '#F1F1F1',
            height: 50,
            width: 50,
            fontSize: 18,
            marginVertical: 10,
            background: '#F1F1F1',
            paddingHorizontal: 20,
            borderRadius: 50,
        }}
    />