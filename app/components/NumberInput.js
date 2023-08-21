import { TextInput } from "react-native";

export const NumberInput = ({ onChangeText, value }) => (
  <TextInput
    accessibilityHint="number"
    placeholder="1"
    keyboardType="number-pad"
    onChangeText={onChangeText}
    maxLength={1}
    value={value}
    style={{
      backgroundColor: "#F1F1F1",
      height: 50,
      width: 50,
      fontSize: 18,
      marginVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 50,
    }}
  />
);