import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../components/colors';
import { AntDesign } from '@expo/vector-icons';
import { CreateButtonIcon } from '../components/svgIcons/cliqueIcon';

function NewTaskButton({ children, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.container}>
                <CreateButtonIcon/>
            </View>
        </TouchableOpacity>
    );
}

const style=StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 64,
        width: 64,
        borderColor: colors.black,
        borderRadius: 32,
        borderWidth: 10,
        bottom: 10
    }

})

export default NewTaskButton;