import React from 'react';
import { Button, TextInput, TouchableOpacity, View, StyleSheet, ViewBase } from 'react-native';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import AppButton from "../components/AppButton";
import colors from '../components/colors';
import ImageIcon from '../components/ImageIcon';
import icons from "../assets/Icons";
import { CloseIcon } from '../components/svgIcons/cliqueIcon';

function ConfirmCode({ navigation }) {
    const [number, setNumber]=React.useState('');

    const onChanged=(text) => {
        let newText='';
        let numbers='0123456789';

        for (var i=0;i<text.length;i++) {
            if (numbers.indexOf(text[i])>-1) {
                newText=newText+text[i];
            }
            else {
                // alert("please enter numbers only");
            }
        }
        setNumber(newText);
    }

    return (
        <Screen>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end'
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
                    <TextInput
                        accessibilityHint='number'
                        placeholder='1'
                        keyboardType="number-pad"
                        onChangeText={text => onChanged(text)}
                        maxLength={1}
                        // returnKeyType="done"
                        style={{
                            backgroundColor: '#F1F1F1',

                            height: 40,
                            fontSize: 18,
                            marginVertical: 10,
                            background: '#F1F1F1',
                            borderColor: '#99D9DD', borderWidth: 1,
                            paddingHorizontal: 20,
                            borderRadius: 50,
                        }} />

                    <TextInput
                        accessibilityHint='number'
                        placeholder='1'
                        keyboardType="number-pad"
                        onChangeText={text => onChanged(text)}
                        maxLength={1}
                        style={{
                            height: 40,

                            backgroundColor: '#F1F1F1',
                            fontSize: 18,
                            marginVertical: 10,
                            background: '#F1F1F1',
                            borderColor: '#99D9DD', borderWidth: 1,
                            paddingHorizontal: 20,
                            borderRadius: 50,
                        }} />

                    <TextInput
                        accessibilityHint='number'
                        placeholder='1'
                        keyboardType="number-pad"
                        maxLength={1}
                        onChangeText={text => onChanged(text)}
                        style={{
                            backgroundColor: '#F1F1F1',

                            height: 40,
                            fontSize: 18,
                            marginVertical: 10,
                            background: '#F1F1F1',
                            borderColor: '#99D9DD', borderWidth: 1,
                            paddingHorizontal: 20,
                            borderRadius: 50,
                        }} />

                    <TextInput
                        accessibilityHint='number'
                        placeholder='1'
                        keyboardType="numeric"
                        maxLength={1}
                        style={{
                            height: 40,

                            backgroundColor: '#F1F1F1',
                            fontSize: 18,
                            marginVertical: 10,
                            background: '#F1F1F1',
                            borderColor: '#99D9DD', borderWidth: 1,
                            paddingHorizontal: 20,
                            borderRadius: 50,
                        }} />

                    <TextInput
                        accessibilityHint='number'
                        placeholder='1'
                        keyboardType="number-pad"
                        maxLength={1}
                        style={{
                            height: 40,

                            backgroundColor: '#F1F1F1',
                            fontSize: 18,
                            marginVertical: 10,
                            background: '#F1F1F1',
                            borderColor: '#99D9DD', borderWidth: 1,
                            paddingHorizontal: 20,
                            borderRadius: 50,
                        }} />
                </View>


                <TouchableOpacity
                    style={[style.button, { backgroundColor: "#7289DA" }]}
                    onPress={() => {
                        console.log("Confirm code")
                    }}>
                    <AppText color={"white"}>Confirm Code</AppText>


                </TouchableOpacity>

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