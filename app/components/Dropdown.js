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
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 20,
          display: 'flex',
          flexDirection: 'row'
        }}>
          <AppText style={[styles.itemStyle,
          { color: selectedValue === label ? colors.green : colors.black },
          { fontWeight: selectedValue === label && '600' }]}>
            {label}
          </AppText>
          
          {/* {selectedValue}s */}
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
        // paddingHorizontal: 10,
        // backgroundColor: colors.gray,
        alignContent: "flex-start",
        width: '100%',
        borderRadius: 10,
        zIndex: 999, // Higher zIndex value to ensure it overlays other components
      }}
    >
      <TouchableOpacity onPress={() => setDropdown(!dropdown)}>
        <AppText>
          { selectedValue ? <AppText>{selectedValue} < Ionicons name="md-checkmark" size={18} allowFontScaling color={colors.green} /></AppText> : "Label"}
        </AppText>
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
  itemStyle: {
    // padding: 10,
    fontSize: 18,
  },
});
