import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants  from 'expo-constants'
import colors from './colors';

function Screen({ children }) {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.white,
                paddingTop: Constants.statusBarHeight-37,
                paddingBottom: -Constants.statusBarHeight
            }}>
                {children}
        </SafeAreaView>
    );
}

export default Screen;