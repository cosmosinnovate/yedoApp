import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import AppInputArea from "../components/AppInputArea";
import AppText from "../components/AppText";
import colors from "../components/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import { DatePickerOptions } from "@react-native-community/datetimepicker";
import AppSelectButton from "../components/AppSelectButton";
import useTask from "../hooks/hooks.useTask.js";
import Dropdown from "../components/Dropdown";

const categories = ["Personal", "Work", "Family"];

function CreateNew({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);

  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [timeToggle, setTimeToggle] = useState(false);
  const [dateToggle, setDateToggle] = useState(false);
  const color = colors.darkGray;
  const { createNewTask, data, taskLoading } = useTask();

  const handleItemSelect = (item) => {
    setCategory(item);
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={styles.close}
          onPress={() => navigation.navigate(routes.HOME)}
        >
          <AntDesign name="close" size={26} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <AppButton
          disabled={title ? false : true}
          color={colors.white}
          background={colors.primary}
          width={80}
          onPress={async () => {
            await createNewTask({ title, description, category });
            setDescription("");
            setTitle("");
          }}
          label="Create"
        />
      ),
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

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      // scrollEnabled
      contentContainerStyle={styles.content}
      style={{ backgroundColor: colors.white }}
    >
      <AppInput
        color={color}
        placeholder="What is on your mind?"
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <AppInputArea
        color={color}
        placeholder="Add more description"
        onChangeText={(text) => setDescription(text)}
        value={description}
      />

      {/* <View
        style={{ backgroundColor: colors.gray, height: 40, borderRadius: 20 }}
      >
        {categories.map((cat, index) => (
          <AppText>{cat}</AppText>
        ))}
      </View> */}

      <Dropdown
        onItemSelect={handleItemSelect}
        data={categories}
        selectedValue={category}
      />

      {/* Date */}
      {/* <View
        style={{
          marginBottom: 10,
          backgroundColor: colors.white,
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              flex: 1,
            }}
          >
            <AppText>Add start date and end date</AppText>
          </View>
          <View style={{ justifyContent: "flex-end" }}>
            <Switch
              value={dateToggle}
              onValueChange={(newValue) => setDateToggle(newValue)}
            ></Switch>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ marginRight: 10 }}>
            <AppText color={color}>Start date</AppText>
          </View>
          <AppInput
            color={color}
            placeholder="Jan 1, 2023"
            onChangeText={(text) => setStartDate(text)}
            value={startDate}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ marginRight: 10 }}>
            <AppText color={color}>Start date</AppText>
          </View>
          <AppInput
            color={color}
            placeholder="Jan 1, 2023"
            onChangeText={(text) => setEndDate(text)}
            value={endDate}
          />
        </View>
      </View> */}

      {/* Time */}
      {/* <View
        style={{
          marginBottom: 10,
          backgroundColor: colors.white,
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              flex: 1,
            }}
          >
            <AppText>Add start time and end time</AppText>
          </View>
          <View style={{ justifyContent: "flex-end" }}>
            <Switch
              value={timeToggle}
              onValueChange={(newValue) => setTimeToggle(newValue)}
            ></Switch>
          </View>
        </View>
      </View>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <View style={{ marginRight: 10 }}>
          <AppText color={color}>Start time</AppText>
        </View>
        <AppInput
          color={color}
          placeholder="10:20 AM"
          onChangeText={(text) => setStartTime(text)}
          value={startTime}
        />
      </View>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <View style={{ marginRight: 10 }}>
          <AppText color={color}>End time</AppText>
        </View>
        <AppInput
          color={color}
          placeholder="12:20 PM"
          onChangeText={(text) => setEndTime(text)}
          value={endTime}
        />
      </View> */}
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

export default CreateNew;
