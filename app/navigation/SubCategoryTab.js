import { View } from "react-native";
import colors from "../components/colors";
import AppSelectButton from "../components/AppSelectButton";
import fontWeight from "../components/fontWeight";
import { useState } from "react";

const selectedValues = ["Family", "Personal", "Work"];

const SubCategoryTab = ({ onPress, value }) => {
  // Sub category
  const [todo, setTodo] = useState("Todo");
  const [completed, setCompleted] = useState("completed");
  const [continuous, setContinuous] = useState("continuous");

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <AppSelectButton
        fontWeight={fontWeight.medium}
        color={!selectedValues.includes(value) ? colors.black : colors.primary}
        onPress={() => onPress(selectedValues[value])}
        background={"transparent"}
        borderColor={value && colors.primary}
        borderRadius={20}
        label={"Todo"}
      ></AppSelectButton>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <AppSelectButton
          fontWeight={fontWeight.medium}
          color={
            !selectedValues.includes(value) ? colors.black : colors.primary
          }
          onPress={() => onPress("Completed")}
          background={"transparent"}
          borderColor={value && colors.primary}
          label={"Completed"}
        ></AppSelectButton>
      </View>
      <AppSelectButton
        fontWeight={fontWeight.medium}
        color={!selectedValues.includes(value) ? colors.black : colors.primary}
        onPress={() => onPress("Continuous")}
        borderColor={value && colors.primary}
        background={"transparent"}
        label="Continuous"
      ></AppSelectButton>
    </View>
  );
};

export default SubCategoryTab;
