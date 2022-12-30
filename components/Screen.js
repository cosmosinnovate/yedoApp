import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from './colors';

function Screen({ children }) {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.white,
                paddingTop: 0,
                paddingHorizontal: 10,
            }}>
                {children}
        </SafeAreaView>
    );
}

export default Screen;