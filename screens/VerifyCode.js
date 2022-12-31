import React from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../components/colors';

function VerifyCode({ title }) {
    return (
        <View style={{
            flex: 1,
            width: '100%',
            alignContent: 'center',
            padding: 20,
            justifyContent: 'center',
        }}>
            <AppText weight='500' mV={10} size='24'>{title}</AppText>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <TextInput
                    textAlign={'center'}
                    style={{
                        backgroundColor: '#EEEEEE',
                        height: 40,
                        fontSize: 18,
                        width: 40,
                        alignContent: 'center',
                        marginVertical: 10,

                        borderRadius: 10,
                    }} />
                <TextInput
                    textAlign={'center'}
                    style={{
                        backgroundColor: '#EEEEEE',
                        height: 40,
                        width: 40,
                        fontSize: 18,
                        marginVertical: 10,
                        borderRadius: 10,
                    }} />
                <TextInput
                    textAlign={'center'}
                    style={{
                        backgroundColor: '#EEEEEE',
                        height: 40,
                        width: 40,
                        fontSize: 18,
                        marginVertical: 10,


                        borderRadius: 10,
                    }} />
                <TextInput
                    textAlign={'center'}

                    style={{
                        backgroundColor: '#EEEEEE',
                        height: 40,
                        width: 40,
                        fontSize: 18,
                        marginVertical: 10,

                        borderRadius: 10,
                    }} />
                <TextInput
                    textAlign={'center'}

                    style={{
                        backgroundColor: '#EEEEEE',
                        height: 40,
                        width: 40,
                        fontSize: 18,
                        marginVertical: 10,
                        borderRadius: 10,
                    }} />
            </View>
            <TouchableOpacity style={[style.button, { backgroundColor: '#7289DA' }]} onPress={() => {
                console.log('Tabbed')
            }}>
                <AppText color={'white'}>Confirm Code</AppText>
            </TouchableOpacity>
        </View>
    );
}

const style=StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 25,
        height: 40,
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
    },
});

export default VerifyCode;