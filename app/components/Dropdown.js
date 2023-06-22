import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import colors from "./colors";

export default function Dropdown({onItemSelect, data, selectedValue}) {
  const [dropdown, setDropdown] = useState(false);

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => selectItem(item)}>
        <Text style={styles.itemStyle}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const selectItem = (item) => {
    setDropdown(false);
    onItemSelect(item);
  };

  return (
    <View
      style={{
        width: 200,
        backgroundColor: colors.gray,
        borderRadius: 20,
      }}
    >
      <Button
        color={colors.black}
        title={selectedValue ? selectedValue : "Select"}
        onPress={() => setDropdown(!dropdown)}
      />
      {dropdown && (
        <View style={styles.dropdownView}>
          {data.map((item, index) => <ItemView key={index} item={item} />)}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "start",
    justifyContent: "center",
    padding: 20,
  },
  dropdownView: {
    backgroundColor: "#FFF",
    width: 200,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    position: 'absolute', // Position it right under the dropdown
    zIndex: 1, // Make sure it overlays other components
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,

  },
  itemStyle: {
    padding: 10,
    fontSize: 18,
  },
});
