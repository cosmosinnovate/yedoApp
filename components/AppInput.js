import React from 'react';
import { View, TextInput } from 'react-native';
import colors from './colors';
import AppText from './AppText';

function AppInput({ onChangeText, placeholder, label, value, borderRadius = 20, ...other }) {
    return (
        <View
            style={{
                flexDirection: 'column',
                marginBottom: 1,
                backgroundColor: colors.white
            }}>
            <AppText size={14} weight={'600'}>{label}</AppText>
            <TextInput
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}
                style={{
                    height: 40,
                    fontSize: 14,
                    marginVertical: 5,
                    color: colors.black,
                    backgroundColor: colors.gray,
                    // borderColor: '#99D9DD', borderWidth: 1,
                    paddingHorizontal: 20,
                    borderRadius: borderRadius,
                }}
                {...other} />
        </View>
    );
}


export default AppInput;