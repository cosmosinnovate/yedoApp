import React, { useState } from "react";
import {
  View,
  Button,
  Modal,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Screen from "./Screen";

export default function Dropdown({ onItemSelect, data, selectedValue }) {
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
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Button
        title={selectedValue ? selectedValue : "Select an item"}
        onPress={() => setDropdown(true)}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={dropdown}
        onRequestClose={() => setDropdown(false)}
      >
        <View style={styles.modalView}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={ItemView}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  modalView: {
    marginTop: 400,
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemStyle: {
    padding: 10,
    fontSize: 18,
  },
});
