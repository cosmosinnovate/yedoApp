import React from 'react';
import { Button, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import AppButton from "../components/AppButton";
import colors from '../components/colors';
import ImageIcon from '../components/ImageIcon';
import icons from "../assets/Icons";

function LoginView({title}) {
    return (

        <View style={{
            flex: 1,
            width: "100%",
            alignContent: "center",
            justifyContent: "center",
        }}>

            <AppText weight='500' mV={10} size="24">{title}</AppText>
            <TextInput
                placeholder='Email'
                style={{
                    height: 50,
                    fontSize: 18,
                    marginVertical: 10,
                    borderColor: colors.secondary, borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                }} />

            <TouchableOpacity
                style={[style.button, { backgroundColor: "#7289DA" }]} onPress={() => {
                    console.log("Tabbed")
                }}>
                <AppText color={"white"}>Send Code</AppText>
            </TouchableOpacity>
        </View>
    );
}

const style=StyleSheet.create({
    button: {
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 25,
        height: 50,
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
    },
});

export default LoginView;