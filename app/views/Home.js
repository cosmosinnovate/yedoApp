import { useCallback, useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
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

export default function Home({ navigation }) {
  const [selected, setSelected] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [deleted, setDeleted] = useState("");
  const [completed, setCompleted] = useState("");
  const [continuous, setContinuous] = useState("");
  const { user } = useContext(AuthContext);
  const { data, getTasks, taskLoading } = useTask();

  useFocusEffect(
    useCallback(() => {
      const getTasksData = async () => {
        await getTasks();
      };
      getTasksData();
      return () => {
        getTasksData();
      };
    }, [])
  );

  useEffect(() => {
    // If the text is empty, then we can show all the tasks
    // If the text is not empty, then we can filter the tasks based on the text.
  }, [deleted, searchText, completed, continuous]);

  const choiceCategory = (value) => {
    setSelected(value);
  };

  return (
    <Screen>
      {taskLoading && data ? (
        <Spinner />
      ) : (
        <ScrollView
          style={{ height: "100%" }}
          automaticallyAdjustKeyboardInsets={true}
        >
          <View style={{ height: "100%" }}>
            <View style={style.topNav}>
              <AppText color={colors.black} size={26} weight="800">
                Hello, {user?.firstName}
              </AppText>
            </View>

            <View style={style.main}>
              <AppInput
                placeholder={"Search tasks"}
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
              />

              {/* List of tasks */}
              <CategoryNavigator
                onPress={(e) => choiceCategory(e)}
                value={selected}
              />
              {/* Sub category */}

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

                <View style={{ flex: 1, marginHorizontal: 10 }}>
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
                {/* 
                            <AppSelectButton
                                fontWeight={fontWeight.medium}
                                color={continuous ? colors.primary : colors.black}
                                onPress={() => {
                                    setDeleted('')
                                    setCompleted('')
                                    setContinuous('Continuous')
                                }}
                                borderColor={continuous ? colors.primary : 'transparent'}
                                background={'transparent'}
                                label='Continuous'>
                            </AppSelectButton> */}
              </View>
            </View>

            <View style={{ flex: 1 }}>
              {/* Select categories */}
              {selected === "All" && (
                <View>
                  <CardListView
                    data={data?.data}
                    category={<WorkIcon color={colors.darkGray} />}
                    subCategory={"Work"}
                    image={Icons.calendar}
                  />
                </View>
              )}

              {/* {selected === "Family" && (
                <View>
                <CardListView
                    data={data}
                    category={<MembersIcon color={colors.darkGray} />}
                    subCategory="Work"
                    image={Icons.calendar}
                  />
                </View>
                              )} */}

              {/* {selected === "Personal" && (
                <View>
                  <CardListView
                    data={data?.data}
                    category={<PersonalIcon color={colors.darkGray} />}
                    subCategory="Work"
                    image={Icons.calendar}
                  />
                </View>
              )}
              {selected === "Work" && (
                <View>
                  <CardListView
                    data={data?.data}
                    category={<WorkIcon color={colors.darkGray} />}
                    subCategory="Work"
                    image={Icons.calendar}
                  />
                </View>
              )} */}
            </View>
          </View>
        </ScrollView>
      )}
    </Screen>
  );
}

const style = StyleSheet.create({
  topNav: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  main: {
    padding: 15,
  },
});
