import React, { useState, useEffect } from 'react';
import { View, TextInput, Keyboard, KeyboardAvoidingView } from 'react-native';
import colors from './colors';
import AppText from './AppText';

function AppInput({
    label,
    value,
    width,
    placeholder,
    onChangeText,
    borderRadius=20,
    color,
    ...other }) {
    return (
        <View style={{
            flexDirection: 'column',
            marginBottom: 1,
            backgroundColor: colors.white
        }}>

            {label? <AppText size={16} weight={'600'} color={color}>{label}</AppText>:null}

            <TextInput
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}
                style={{
                    fontSize: 18,
                    marginVertical: 5,
                    color: colors.black,
                    height: 40,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.gray,
                    paddingHorizontal: 16,
                    borderRadius: borderRadius,
                }}
                {...other}
            />
        </View>
    );
}


export default AppInput;