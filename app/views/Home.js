import { useIsFocused } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import AppInput from "../components/AppInput";
import AppText from "../components/AppText";
import CardItemView from "../components/CardItemView";
import Screen from "../components/Screen";
import colors from "../components/colors";
import CategoryNavigator from "../navigation/CategoryNavigator";
import { getTasks } from "../redux/tasksSlice";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectCategory, setSelectCategory] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  const isFocused = useIsFocused();

  const selectCategoryHandler = async (e) => {
    setSelectCategory(e);
    setStatus(e === 'active' && false)
    setStatus(e === 'done' && true);
  };

  const fetchTasks = useCallback(async (status) => {
    dispatch(getTasks({ status: status }));
  }, [dispatch]);

  // useEffect will trigger the callback when the screen comes into focus
  useEffect(() => {
    if (isFocused) {
      fetchTasks(status);
    }
  }, [isFocused, fetchTasks, selectCategory, status])

  const { tasks, loading } = useSelector((state) => state.tasks)
  const filteredTasks = tasks.filter(task => (
    (task.category === selectCategory || task.status === status) &&
    (task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()))
  ));
  
  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <View style={{ height: 160 }}>
          <View style={style.main}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <AppInput
                  padding={20}
                  placeholder={"Search"}
                  onChangeText={(text) => setSearchQuery(text)}
                />
              </View>
            </View>
          </View>
          
          <CategoryNavigator
            onPress={(e) => selectCategoryHandler(e)}
            value={selectCategory}
          />
        </View>

        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item._id}
          onEndReachedThreshold={0.2}
          ListFooterComponent={loading ? <ActivityIndicator size="large" color={colors.primary} /> : null}
          ListEmptyComponent={
            <View style={{
              paddingHorizontal: 15,
              paddingVertical: 5,
              alignItems: 'center'
            }}>
              <AppText>No tasks available</AppText>
            </View>
          }
          renderItem={({ item, index }) => (
            <CardItemView
              key={item._id}
              item={item}
            />
          )}
        />

      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <AppText width='800' color={colors.darkGray}>Select Filters</AppText>

            <View style={{ marginVertical: 20, display: 'flex', flexDirection: 'column' }}>
              <AppText style={{ marginBottom: 10 }} width='800' color={colors.darkGray}>Completed</AppText>
              <AppText width='800' color={colors.darkGray}>Deleted</AppText>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: `100%` }}>
              <TouchableOpacity
                style={[style.button, style.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <AppText style={style.textStyle}>Show tasks</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Screen>
  );
}

// Styles...
const style = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    borderRadius: 30,
    backgroundColor: colors.primary,
    zIndex: 1000, // make sure it floats over your other UI elements
  },
  icon: {
    fontSize: 24,
    color: 'white',
  },

  topNav: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  main: {
    padding: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
    zIndex: 1000, // Higher zIndex value for the modal container
  },
  modalView: {
    width: '100%',
    height: '50%',
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: "start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1001, // Higher zIndex value for the modal content
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: colors.primary,
  },
  modalText: {
    marginBottom: 30,
    textAlign: "st"
  }
});
