import { View, StyleSheet } from "react-native";
import colors from "../components/colors";
import AppSelectButton from "../components/AppSelectButton";
import fontWeight from "../components/fontWeight";
import {
  MembersIcon,
  PersonalIcon,
  WorkIcon,
} from "../assets/svgIcons/yenoIcon";

const CategoryNavigator = ({ onPress, value }) => (

  <View style={selectStyle.main}>
    <AppSelectButton
      fontWeight={fontWeight.medium}
      size={12}
      color={value === "active" ? colors.white : colors.black}
      onPress={() => onPress("active")}
      background={value === "active" ? colors.primary : colors.gray}
      label="Active"
    />
    <AppSelectButton
      fontWeight={fontWeight.medium}
      size={12}
      color={value === "done" ? colors.white : colors.black}
      onPress={() => onPress("done")}
      background={value === "done" ? colors.primary : colors.gray}
      label="Done"
    />
    <AppSelectButton
      fontWeight={fontWeight.medium}
      color={value === "Family" ? colors.white : colors.black}
      onPress={() => onPress("Family")}
      background={value === "Family" ? colors.primary : colors.gray}
      label=""
      size={12}
      icon={
        <MembersIcon
          color={value === "Family" ? colors.white : colors.darkGray}
        />
      }
    />
    <AppSelectButton
      fontWeight={fontWeight.medium}
      color={value === "Personal" ? colors.white : colors.black}
      onPress={() => onPress("Personal")}
      background={value === "Personal" ? colors.primary : colors.gray}
      label=""
      size={12}
      icon={
        <PersonalIcon
          color={value === "Personal" ? colors.white : colors.darkGray}
        />
      }
    />
  </View>
);

const selectStyle = StyleSheet.create({
  main: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 40,

    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CategoryNavigator;
