import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../components/colors';
import { AntDesign } from '@expo/vector-icons';

function NewTaskButton({ onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}>
            <View style={style.container}>
                <View style={style.innerCircle}>
                    <AntDesign name='plus' color={colors.primary} size={40} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const style=StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 60, color: 'transparent',
        borderColor: colors.white,
        borderWidth: 4,
        borderRadius: 30,
        bottom: 10
    },

    innerCircle: {
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40, color: 'transparent',
        borderRadius: 20,
    }

})

export default NewTaskButton;