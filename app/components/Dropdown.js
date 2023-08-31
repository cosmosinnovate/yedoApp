import React, { useState } from "react";
import { View, Button, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "./colors";
import fontWeight from "./fontWeight";
import { Ionicons } from "@expo/vector-icons";
import { HomeIcon, MembersIcon, PersonalIcon } from "../assets/svgIcons/yenoIcon";
import AppText from "./AppText";

export default function Dropdown({ onItemSelect, data, selectedValue }) {
  const [dropdown, setDropdown] = useState(false);

  const ItemView = ({ label }) => {
    return (
      <TouchableOpacity onPress={() => selectItem(label)}>
        <View style={{
          padding: 10,
          display: 'flex',
          flexDirection: 'row'
        }}>
          <AppText size={14} textAlign="left" style={{ 
              color: selectedValue === label ? colors.green : colors.black, 
              fontWeight: selectedValue === label && '400' }}>
            {label}
          </AppText>
        </View>
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
        display: 'flex',
        alignContent: "flex-start",
        width: '100%',
        borderRadius: 10,
        zIndex: 999, // Higher zIndex value to ensure it overlays other components
      }}
    >
      <TouchableOpacity onPress={() => setDropdown(!dropdown)}>
        {selectedValue ? <AppText textAlign="left" size={14}>{selectedValue} <Ionicons name="md-checkmark" size={18} allowFontScaling color={colors.green} /> </AppText> : <AppText textAlign="left" size={14}>Label</AppText>
        }
      </TouchableOpacity>


      {dropdown && (
        <View style={styles.dropdownView}>
          {data.map((item, index) => <ItemView key={index} label={item} />)}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "start",
    justifyContent: "center",
  },
  dropdownView: {
    backgroundColor: "#FFF",
    // width: "100%",
    borderRadius: 10,
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: 'absolute',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000, // Higher zIndex value to ensure it overlays other components
  },
});
