import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import AppInputArea from "../components/AppInputArea";
import colors from "../components/colors";
import routes from "../navigation/routes";
import Dropdown from "../components/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import { addTask } from '../redux/tasksSlice'


const categories = ["Personal", "Family"];

const HeaderLeft = ({ onPress }) => (
  <TouchableOpacity style={styles.close} onPress={onPress}>
    <AntDesign name="close" size={26} />
  </TouchableOpacity>
);

const HeaderRight = ({ onPress, disabled, loading }) => (
  <AppButton
    disabled={disabled}
    color={colors.white}
    background={colors.primary}
    width={80}
    onPress={onPress}
    // Todo: Fix this part
    label={loading ? 'Wait...' : "Add"}
  />
);


function CreateTask({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const color = colors.darkGray;
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.tasks)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
    }
    setShowDatePicker(Platform.OS === "ios"); // Hide date picker on iOS after selecting a date
  };

  const handleTimeChange = (event, time) => {
    if (time !== undefined) {
      setSelectedTime(time);
    }
    setShowTimePicker(Platform.OS === "ios"); // Hide time picker on iOS after selecting a time
  };

  const showDatePickerModal = () => {
    setShowDatePicker(!showDatePicker);
  };

  const showTimePickerModal = () => {
    setShowTimePicker(!showTimePicker);
  };

  const handleItemSelect = (item) => {
    setCategory(item);
  };


  const handleAddTask = () => {
    // TODO
    // Show a model that shows 
    // set reminder time 
    // add category
    // then add the task all at once.
    dispatch(addTask({
      title: title,
      description: description,
      category: category,
      startDate: selectedDate,
      startTime: selectedTime,
    }));
    setDescription("");
    setTitle("");
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeft onPress={() => navigation.navigate(routes.HOME)} />,
      headerRight: () => (
        <HeaderRight
          loading={loading}
          disabled={title ? false : true}
          onPress={() => {
            handleAddTask();
          }}
        />
      )
    });
  }, [navigation,
    title,
    handleAddTask,
  ]);

  return (
    <View style={styles.container}>

      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={styles.content}
        style={{ backgroundColor: colors.white }}
      >
        <View style={styles.inputAreaContainer}>
          <AppInput
            color={colors.white}
            style={{ fontWeight: "500" }}
            fontSize={20}
            borderRadius={0}
            marginVertical={1}
            placeholder="Task title"
            bblr={0}
            bbrr={0}
            backgroundColor={colors.white}
            marginBottom={0}
            onChangeText={(text) => setTitle(text)}
            value={title}
          />

          <View style={{ marginBottom: 10, marginTop: 10, height: 1, backgroundColor: colors.gray }}></View>

          <AppInputArea
            color={color}
            placeholder="Description"
            marginBottom={1}
            fontSize={18}
            bblr={0}
            bbrr={0}
            borderRadius={0}
            backgroundColor={colors.white}
            onChangeText={(text) => setDescription(text)}
            value={description}
          />
        </View>

        <View style={{ paddingVertical: 10, display: 'flex', }}>
          <View style={styles.datePicker}>
            <View style={styles.dateTime}>
              <View style={styles.buttonContainer}>
                <Button title="Select Date" onPress={showDatePickerModal} />
              </View>
              {showDatePicker && (
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={handleDateChange}
                />
              )}
            </View>

            <View style={styles.dateTime}>
              <View style={styles.buttonContainer}>
                <Button title="Select Time" onPress={showTimePickerModal} />
              </View>
              {showTimePicker && (
                <DateTimePicker
                  value={selectedTime}
                  mode="time"
                  is24Hour={true}
                  display="default"
                  onChange={handleTimeChange}
                />
              )}
            </View>


          </View>
          <View style={{ paddingVertical: 10 }}>
            <Dropdown
              onItemSelect={handleItemSelect}
              data={categories}
              selectedValue={category}
            />
          </View>

        </View>



      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray
  },
  content: {
    padding: 15,
    width: "100%",
    marginBottom: 20,
  },
  topBar: {
    // alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  datePicker: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: "flex-start", // Align children to the start (top) of the container
    alignItems: "flex-start", // Align children to the start (left) of the container
  },
  buttonContainer: {
    // marginBottom: 10, // Optional: Add margin bottom to separate from DateTimePicker
  },

  dateTime: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputAreaContainer: {
    flex: 1, // Make the container take up the remaining space
    height: '100%',
    // backgroundColor: colors.darkGray

  },
});

export default CreateTask;
