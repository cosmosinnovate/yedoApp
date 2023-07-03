import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View, Modal } from "react-native";
import AppInput from "../components/AppInput";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../components/colors";
import CategoryNavigator from "../navigation/CategoryNavigator";
import Spinner from "../components/Spinner";
import useTaskPagination from "../hooks/hooks.useTaskPagination";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import CardItemView from "../components/CardItemView";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterTaskState, taskSearchState } from "../services/atoms/tasks.atoms";
import { taskSearchListState } from "../services/selectors/tasks.selectors";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { getTasks, loadMoreData, allDataFetched, isLoading, data } = useTaskPagination();
  const [filter, setFilter] = useRecoilState(filterTaskState);
  const [searchTextFilter, setSearchTextFilter] = useRecoilState(taskSearchState);
  const [searchText, setSearchText] = useState(searchTextFilter);
  const [selectCategory, setSelectCategory] = useState(filter);
  const taskList = useRecoilValue(taskSearchListState);

  const getTasksData = async () => {
    if (!isLoading && !allDataFetched) {
      await getTasks(selectCategory, false);
    }
  };

  const selectCategoryHandler = async (e) => {
    setSelectCategory(e);
    setFilter(e)
  };

  useEffect(() => {
    getTasksData();
  }, []);

  useEffect(() => {
    setSearchTextFilter(searchText);
  }, [searchText, setSearchTextFilter]);

  return (
    <Screen>
      {isLoading && data ? (
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
                {/* <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <View style={{ marginRight: 10 }}>
                    <AppText style={{ fontSize: 18, fontWeight: 'bold', color: colors.black }}>Filter</AppText>
                  </View>
                </TouchableOpacity> */}

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
              data={taskList}
              keyExtractor={(_item, index) => index}
              onEndReached={() => loadMoreData}
              onEndReachedThreshold={0.2}
              ListFooterComponent={isLoading && <ActivityIndicator size="large" color="#0000ff" />}
              renderItem={({ item, index }) => (
                <CardItemView
                  key={item._id}
                  item={item}
                />
              )}
            />
          </View>
        </View>
      )}


      {/* Floating button implementation */}
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
      </Modal>

      <TouchableOpacity
        style={style.floatingButton}
        setModalVisible >
        <MaterialIcons name="add" style={style.icon} />
      </TouchableOpacity> */}

      {/* Filter Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={style.centeredView}>
          <View style={{ position: 'relative', marginBottom: -10, zIndex: 1 }}>
            {/* <TouchableOpacity
              style={[style.button, style.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
            </TouchableOpacity> */}
          </View>
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
