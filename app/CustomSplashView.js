import React from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';
import colors from './components/colors';
import { YenoLogo } from './assets/svgIcons/yenoIcon';

function CustomSplashView() {
  return (
    <View style={styles.container}>
      <Image source={YenoLogo} style={styles.logo} />
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default CustomSplashView;
