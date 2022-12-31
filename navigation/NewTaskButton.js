import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../components/colors';
import { AntDesign } from '@expo/vector-icons';
import { CreateButtonIcon } from '../components/svgIcons/cliqueIcon';
import { TouchableHighlight } from 'react-native-gesture-handler';

function NewTaskButton({ children, onPress }) {
    return (
        <TouchableHighlight 
            underlayColor={true} 
            activeOpacity={true}
            onPress={onPress}>
            <View style={style.container}>
                <CreateButtonIcon />
            </View>
        </TouchableHighlight>
    );
}

const style=StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 62,
        width: 62,color: 'transparent',
        borderColor: colors.black,
        borderRadius: 31,
        bottom: 0
    }

})

export default NewTaskButton;