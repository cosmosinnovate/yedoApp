


import React from 'react';
import { View, TextInput } from 'react-native';
import colors from './colors';
import AppText from './AppText';

function AppInputArea({ color, onChangeText, placeholder, label, value, borderRadius = 20, ...other }) {
    return (
        <View
            style={{
                flexDirection: 'column',
                marginBottom: 1,
                backgroundColor: colors.white
            }}>
            <AppText weight={'600'} color={color}>{label}</AppText>
            <TextInput
                multiline={true}
                numberOfLines={10}
                
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}
                style={{
                    height:200, 
                    textAlignVertical: 'top',
                    fontSize: 16,
                    marginVertical: 5,
                    color: colors.black,
                    backgroundColor: colors.gray,
                    paddingHorizontal: 20,
                    borderRadius: borderRadius,
                }}
                {...other} />
        </View>
    );
}


export default AppInputArea;