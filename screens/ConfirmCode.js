import React, { useState } from 'react';
import { Button, TextInput, TouchableOpacity, View, StyleSheet, ViewBase } from 'react-native';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import AppButton from "../components/AppButton";
import colors from '../components/colors';
import ImageIcon from '../components/ImageIcon';
import icons from "../assets/Icons";
import { CloseIcon } from '../components/svgIcons/cliqueIcon';
import AppInput from '../components/AppInput';


function ConfirmCode({ navigation }) {
    const [number1, setNumber1]=useState(0)
    const [number2, setNumber2]=useState(0)
    const [number3, setNumber3]=useState(0)
    const [number4, setNumber4]=useState(0)
    const [number5, setNumber5]=useState(0)

    const onChanged=(text) => {
        let newText='';
        let numbers='0123456789'; 111
        for (var i=0;i<text.length;i++) {
            if (numbers.indexOf(text[i])>-1) {
                newText=newText+text[i];
            }
        }
        return newText;
    }

    return (
        <Screen>
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
                }}>Confirm Code</AppText>

                <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <NumberInput onChangeText={(text) => setNumber1(() => onChanged(text))} value={number1}/>
                    <NumberInput onChangeText={(text) => setNumber2(() => onChanged(text))} value={number2}/>
                    <NumberInput onChangeText={(text) => setNumber3(() => onChanged(text))} value={number3}/>
                    <NumberInput onChangeText={(text) => setNumber4(() => onChanged(text))} value={number4}/>
                    <NumberInput onChangeText={(text) => setNumber5(() => onChanged(text))} value={number5}/>
                </View>

                <AppButton label={'Confirm Code'} background={colors.primary} color={colors.white} />

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