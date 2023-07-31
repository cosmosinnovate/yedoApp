import React from 'react';
import { View, TextInput } from 'react-native';
import colors from './colors';
import AppText from './AppText';

function AppInputArea({ color, backgroundColor, onChangeText, placeholder, label, value, marginBottom = 1, borderRadius = 20, ...other }) {
  return (
    <View
      style={{
        flexDirection: 'column',
        marginBottom: marginBottom,
        backgroundColor: backgroundColor,
        height: '100%'
      }}>
      {label && <AppText weight={'600'} color={color}>{label}</AppText>}
      <TextInput
        multiline={true}
        numberOfLines={10}
        
        onChangeText={onChangeText}
        maxLength={1000}
        placeholder={placeholder}
        value={value}
        style={{
          height: 200,
          textAlignVertical: 'top',
          fontSize: 16,
          color: colors.black,
          backgroundColor: backgroundColor,
          paddingTop: 0,
          paddingHorizontal: 0,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,

        }}
        {...other} />
    </View>
  );
}


export default AppInputArea;