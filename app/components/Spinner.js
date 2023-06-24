import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import colors from "./colors";

const Spinner = () => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="small" color={colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    position: "relative",
  },
});

export default Spinner;
