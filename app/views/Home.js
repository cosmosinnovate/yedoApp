import { useCallback, useContext, useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import Icons from "../assets/Icons";
import {
  MembersIcon,
  PersonalIcon,
  WorkIcon,
} from "../assets/svgIcons/cliqueIcon";
import AppInput from "../components/AppInput";
import AppSelectButton from "../components/AppSelectButton";
import AppText from "../components/AppText";
import CardListView from "../components/CardListView";
import Screen from "../components/Screen";
import colors from "../components/colors";
import fontWeight from "../components/fontWeight";
import useAuth from "../hooks/hooks.useAuth";
import CategoryNavigator from "../navigation/CategoryNavigator";
import { AuthContext } from "../services/store/store.context";
import useTask from "../hooks/hooks.useTask";
import { useFocusEffect } from "@react-navigation/core";
import Spinner from "../components/Spinner";
import useTaskPagination from "../hooks/hooks.useTaskPagination";
import { FlatList } from "react-native-gesture-handler";
import CardItemView from "../components/CardItemView";
import ListItemDelete from "../components/ListItemDelete";

export default function Home({ navigation }) {
  const [selectCategory, setSelectCategory] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks || []);
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
  

  console.log('SelectCategory', selectCategory);

  return (
    <Screen>
      {taskLoading && data ? (
        <Spinner />
      ) : (
        <View style={{ height: "100%" }}>
          <View style={{ height: 160 }}>
            <View style={style.topNav}>
              <AppText color={colors.black} size={18} weight="800">
                Hello, {user?.firstName}
              </AppText>
            </View>
            <View style={style.main}>
              <View style={{ marginBottom: 30 }}>
                <AppInput
                  padding={20}
                  placeholder={"Search tasks"}
                  onChangeText={(text) => setSearchText(text)}
                  value={searchText}
                />
              </View>

              <View style={{ flex: 1, marginBottom: 10 }}>
                  <CategoryNavigator
                    
                  onPress={(e) => selectCategoryHandler(e)}
                  value={selectCategory}
                />
              </View>
            </View>

            {/* <View
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                marginBottom: 0,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <AppSelectButton
                fontWeight={fontWeight.medium}
                color={deleted ? colors.primary : colors.black}
                onPress={() => {
                  setContinuous("");
                  setCompleted("");
                  setDeleted("Deleted");
                }}
                background={"transparent"}
                borderColor={deleted ? colors.primary : "transparent"}
                borderRadius={20}
                label={"Deleted"}
              ></AppSelectButton>

              <View style={{ flex: 1, marginHorizontal: 0 }}>
                <AppSelectButton
                  fontWeight={fontWeight.medium}
                  color={completed ? colors.primary : colors.black}
                  onPress={() => {
                    setDeleted("");
                    setContinuous("");
                    setCompleted("Completed");
                  }}
                  background={"transparent"}
                  borderColor={completed ? colors.primary : "transparent"}
                  label={"Completed"}
                ></AppSelectButton>
              </View>

              <AppSelectButton
                fontWeight={fontWeight.medium}
                color={continuous ? colors.primary : colors.black}
                onPress={() => {
                  setDeleted("");
                  setCompleted("");
                  setContinuous("Continuous");
                }}
                borderColor={continuous ? colors.primary : "transparent"}
                background={"transparent"}
                label="Continuous"
              ></AppSelectButton>
            </View> */}
          </View>

          <View style={{ flex: 1 }}>
            <FlatList
              data={filteredTasks}
              keyExtractor={(item, index) => index}
              onEndReached={getTasksData}
              onEndReachedThreshold={0.5}
              ListFooterComponent={() =>
                taskLoading && (
                  <ActivityIndicator size="large" color="#0000ff" />
                )
              }
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
});
