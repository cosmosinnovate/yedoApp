import React from 'react';
import { TextInput, View, Text, StyleSheet } from "react-native";

const NumberInput = ({
  onChangeText,
  value,
  error,
  onBlur,
  placeholder='',
  ...otherProps
}) => {

  const onChanged = (text) => {
    let newText = "";
    let numbers = "0123456789";
    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
    }
    onChangeText(newText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        accessibilityHint="number"
        placeholder={placeholder.toString()}
        keyboardType="number-pad"
        onChangeText={onChanged}
        onBlur={onBlur}
        maxLength={1}
        value={value ? value.toString() : ''}
        style={[
          styles.input,
          error && styles.errorInput
        ]}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  input: {
    backgroundColor: "#F1F1F1",
    height: 50,
    width: 50,
    fontSize: 16,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  }
});

export default NumberInput;
