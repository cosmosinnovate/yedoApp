import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View, Modal } from "react-native";
import AppInput from "../components/AppInput";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../components/colors";
import CategoryNavigator from "../navigations/CategoryNavigator";
import { AuthContext } from "../services/store/store.context";
import Spinner from "../components/Spinner";
import useTaskPagination from "../hooks/hooks.useTaskPagination";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import CardItemView from "../components/CardItemView";
import ListItemDelete from "../components/ListItemDelete";

export default function Home({ navigation }) {
  const [selectCategory, setSelectCategory] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks || []);
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useContext(AuthContext);
  const { data, getTasks, tasks, deleteTask, markTaskAsCompleted, allDataFetched, taskLoading } =
    useTaskPagination();

  const getTasksData = async () => {
    if (!taskLoading && !allDataFetched) {
      await getTasks(true, selectCategory);
    }
  };

  const selectCategoryHandler = async (e) => {
    setSelectCategory(e);
  };

  const deleteTaskHandler = async (id) => {
    await deleteTask(id);
    console.log(id);
  };

  const markTaskAsCompletedHandler = async (id) => {
    console.log(id);
    await markTaskAsCompleted(id);
  };

  useEffect(() => {
    getTasksData();
  }, []);

  useEffect(() => {
    if (searchText === "") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(
        tasks.filter((task) =>
          task.title.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [searchText, tasks]);

  return (
    <Screen>
      {taskLoading && data ? (
        <Spinner />
      ) : (
        <View style={{ height: "100%" }}>
          <View style={{ height: 160 }}>
            {/* <View style={style.topNav}>
              <AppText color={colors.black} size={18} weight="800">
                Hello, {user?.firstName}
              </AppText>
            </View> */}

            <View style={style.main}>
              <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <View style={{ marginRight: 10 }}>
                    <AppText style={{ fontSize: 18, fontWeight: 'bold', color: colors.black }}>Filter</AppText>
                  </View>
                </TouchableOpacity>

                <View style={{ flex: 1 }}>
                  <AppInput
                    padding={20}
                    placeholder={"Search"}
                    onChangeText={(text) => setSearchText(text)}
                    value={searchText}
                  />
                </View>
              </View>

            </View>
            <CategoryNavigator
              onPress={(e) => selectCategoryHandler(e)}
              value={selectCategory}
            />
          </View>

          <View style={{ flex: 1 }}>
            <FlatList
              data={filteredTasks}
              keyExtractor={(item, index) => index}
              onEndReached={getTasksData}
              onEndReachedThreshold={0.5}
              ListFooterComponent={taskLoading && <ActivityIndicator size="large" color="#0000ff" />}
              renderItem={({ item, index }) => (
                <CardItemView
                  onPressCompleteTask={markTaskAsCompletedHandler}
                  key={index}
                  item={item}
                  renderRightActions={() => <ListItemDelete onPress={deleteTaskHandler} id={item._id} />}
                />
              )}
            />
          </View>
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >


        <View style={style.centeredView}>
          <View style={{position: 'relative', marginBottom: -10, zIndex: 1}}>

        <TouchableOpacity
                style={[style.button, style.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                {/* <AppText style={style.textStyle}>Show tasks</AppText> */}
              </TouchableOpacity>
              </View>
          <View style={style.modalView}>
            <AppText width='800' color={colors.darkgray}>Select Filters</AppText>

            <View style={{ marginVertical: 20, display: 'flex', flexDirection: 'column' }}>
              <AppText style={{ marginBottom: 10 }} width='800' color={colors.darkgray}>Completed</AppText>
              <AppText width='800' color={colors.darkgray}>Deleted</AppText>
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

const style = StyleSheet.create({
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
    elevation: 5
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
