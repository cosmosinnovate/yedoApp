import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from './colors'

export default function LineSeparator() {
    return (
        <View style={style.separator}></View>
    )
}

const style=StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.gray
    }
})