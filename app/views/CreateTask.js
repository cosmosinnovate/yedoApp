import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import AppInputArea from "../components/AppInputArea";
import colors from "../components/colors";
import routes from "../navigation/routes";
import Dropdown from "../components/Dropdown";
import useTaskPagination from "../hooks/hooks.useTaskPagination";

const categories = ["Personal", "Work", "Family"];

const HeaderLeft = ({ onPress }) => (
  <TouchableOpacity style={styles.close} onPress={onPress}>
    <AntDesign name="close" size={26} />
  </TouchableOpacity>
);

const HeaderRight = ({ onPress, disabled }) => (
  <AppButton
    disabled={disabled}
    color={colors.white}
    background={colors.primary}
    width={80}
    onPress={onPress}
    label="Add"
  />
);

function CreateTask({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const color = colors.darkGray;
  const { createNewTask, data, taskLoading } = useTaskPagination();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeft onPress={() => navigation.navigate(routes.HOME)} />,
      headerRight: () => (
        <HeaderRight
          disabled={title ? false : true}
          onPress={() => {
            createNewTask({ title, description, category });
            setDescription("");
            setTitle("");
          }}
        />
      )
    });
  }, [
    navigation,
    title,
    description,
    category,
    data,
    taskLoading,
    createNewTask,
  ]);

  const handleItemSelect = (item) => {
    setCategory(item);
  };

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      contentContainerStyle={styles.content}
      style={{ backgroundColor: colors.white }}
    >
      <View>

        <AppInput
          color={colors.white}
          style={{ fontWeight: "600" }}
          fontSize={30}
          borderRadius={0}
          marginVertical={1}
          placeholder="Add task title"
          bblr={0}
          bbrr={0}
          inputBackgroundColor={colors.white}
          marginBottom={0}
          onChangeText={(text) => setTitle(text)}
          value={title}
        />

        <AppInputArea
          color={color}
          placeholder="Add more description"
          marginBottom={1}
          fontSize={18}
          style={{ height: "100%" }}
          onChangeText={(text) => setDescription(text)}
          value={description}
        />
      </View>

      <Dropdown
        onItemSelect={handleItemSelect}
        data={categories}
        selectedValue={category}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 15,
    width: "100%",
    marginBottom: 20,
  },
  topBar: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default CreateTask;
