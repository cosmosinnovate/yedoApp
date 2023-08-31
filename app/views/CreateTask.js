import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, TouchableOpacity, View } from "react-native";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import AppInputArea from "../components/AppInputArea";
import colors from "../components/colors";
import routes from "../navigation/routes";
import Dropdown from "../components/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import { addTask } from '../redux/tasksSlice'
import { resetError } from "../redux/tasksSlice";
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import AppText from "../components/AppText";



const CreateTask = ({ navigation }) => {
  const color = colors.darkGray;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [reminder, setReminder] = useState(false);
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(state => state.tasks);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      category: '',
      startDate: new Date(),
      startTime: new Date(),
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(addTask(values));
      formik.resetForm();
      navigation.goBack();
    }
  });


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
  }

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeft onPress={() => {
        formik.resetForm()
        navigation.navigate(routes.HOME)

      }} />,
      headerRight: () => (
        <HeaderRight
          loading={loading}
          disabled={!formik.isValid}
          onPress={formik.handleSubmit}
        />
      )
    });
  }, [navigation, formik.isValid, formik.handleSubmit, loading]);


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

  if (error) {
    Alert.alert('Error', `${error}`,
      [
        {
          text: 'Ok',
          onPress: () => dispatch(resetError())
        }
      ],
      { cancelable: true })
  }

  console.log(error)

  return (
    <View style={styles.container}>
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={styles.content}
        style={{ backgroundColor: colors.white }}
      >
        <View style={styles.inputAreaContainer}>
          <AppInput
            style={{ fontWeight: "500" }}
            fontSize={14}
            borderRadius={0}
            marginVertical={1}
            placeholder="What you planning to do?"
            maxLength={50}
            backgroundColor={colors.white}
            marginBottom={0}
            onChangeText={formik.handleChange('title')}
            onBlur={formik.handleBlur('title')}
            value={formik.values.title}
          />

          <View style={{ marginBottom: 10, marginTop: 10, height: 1, backgroundColor: colors.gray }}></View>

          <AppInputArea
            color={color}
            placeholder="Notes"
            marginBottom={1}
            fontSize={12}
            bblr={0}
            bbrr={0}
            maxLength={1000}
            borderRadius={0}
            backgroundColor={colors.white}
            onChangeText={formik.handleChange('description')}
            onBlur={formik.handleBlur('description')}
            value={formik.values.description}
          />
        </View>

        <AppText textAlign="left" size={10}>{formik.values.description.length !== 0 ?
          <AppText textAlign="left" size={10} color={'red'}>
            {formik.values.description.length > 900 && formik.values.description.length - 1000}
          </AppText>
          : formik.values.description.length
        }</AppText>

        <View style={styles.buttonContainer}>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => setReminder(!reminder)}><AppText textAlign="left" size={14}>
          Add reminder</AppText>
        </TouchableOpacity>



        {reminder &&
          <View style={{ paddingVertical: 10, display: 'flex', }}>
            <View style={styles.datePicker}>
              <View style={styles.dateTime}>
                <DateTimePicker
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={handleDateChange}
                  onChangeText={formik.handleChange('startDate')}
                  onBlur={formik.handleBlur('startDate')}
                  value={formik?.values.startDate}
                />
              </View>

              <View style={styles.dateTime}>
                <DateTimePicker
                  mode="time"
                  is24Hour={true}
                  display="default"
                  onChange={handleTimeChange}
                  onChangeText={formik.handleChange('startTime')}
                  onBlur={formik.handleBlur('startTime')}
                  value={formik?.values.startTime}
                />
              </View>
            </View>
          </View>
        }


        <View style={{ paddingVertical: 10 }}>
          <Dropdown
            onItemSelect={(item) => {
              formik.setFieldValue('category', item);
            }}
            data={categories}
            selectedValue={formik.values.category}
          />
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
    marginVertical: 10, // Optional: Add margin bottom to separate from DateTimePicker
    marginLeft: 0,
    flex: 1,
    alignItems: 'flex-start'
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



const categories = ["Personal", "Family"];

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required').max(50),
  description: Yup.string().required('Description is required').max(1000),
  category: Yup.string().required('Category is required'),
});

const HeaderLeft = ({ onPress }) => (
  <TouchableOpacity style={styles.close} onPress={onPress}>
    <AntDesign name="close" size={26} />
  </TouchableOpacity>
);

const HeaderRight = ({ onPress, disabled = true, loading }) => (
<View>
    <TouchableOpacity style={{}} disabled={disabled} onPress={onPress}>
      <AppText size={14} color={!disabled && colors.darkGray}>{loading ? 'Wait...' : "Add"}</AppText>
  </TouchableOpacity>
</View>);