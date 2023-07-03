import { View, StyleSheet, TouchableHighlight, Easing } from "react-native";
import colors from "./colors";
import AppText from "./AppText";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";
import { Swipeable } from "react-native-gesture-handler";
import { dateFormat } from "../utils/util.date";
import DetailViewModal from "./DetailViewModal";
import useTaskPagination from "../hooks/hooks.useTaskPagination";
import ListItemDelete from "./ListItemDelete";

export default function CardItemView({ item }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { markTaskAsCompleted, deleteTask } = useTaskPagination();
  const [status, setStatus] = useState(item.status);

  const onPressCompleteTask = async (id) => {
    await markTaskAsCompleted(id, !item.status);
    setStatus(!item.status);
  };

  const onDeleteTask = async (id) => {
    await deleteTask(id);
  };

  return (
    <Swipeable renderRightActions={() => <ListItemDelete
      onPress={() => onDeleteTask(item?._id)}
      id={item?._id} />}
      animationOptions={{ duration: 250, easing: Easing.ease }}
      >
      <View style={style.item}>
        <BouncyCheckbox
          size={24}
          fillColor={colors["black"]}
          innerIconStyle={{ borderWidth: 2 }}
          unfillColor={"transparent"}
          isChecked={status}
          onPress={() => {
            onPressCompleteTask(item._id);
          }}
        />

        <View style={[style.contentItems]}>
          <View style={style.divider} />
          <View style={style.contentBody}>

            <AppText size={18} color={colors["darkGray"]}>
              {item.user?.firstName} | {dateFormat(item.createdAt)}
            </AppText>

            <AppText
              color={colors["black"]}
              textDecoration={status ? "line-through" : "none"}
            >
              {item.title}
            </AppText>

            <View
              style={{
                borderColor: colors["darkGray"],
                paddingTop: 6,
                backgroundColor: colors["white"],
                borderRadius: 10,
                display: "flex",
              }}
            >
              <TouchableHighlight
                style={{
                  borderRadius: 20,
                  paddingTop: 10,
                  elevation: 2,
                }}
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <AppText>See Details</AppText>
              </TouchableHighlight>
            </View>

          </View>
        </View>
      </View>
      {/* TODO: Open this detail view in edit view */}
      <DetailViewModal setModalVisible={setModalVisible} modalVisible={modalVisible} description={item.description} />
    
    </Swipeable>
  );
}

const style = StyleSheet.create({
  item: {
    marginVertical: 10,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  image: {
    width: 24,
    height: 24,
  },
  contentItems: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentBody: {
    flexDirection: "column",
  },
  divider: {
    height: 40,
    width: 2,
    marginRight: 15,
    backgroundColor: colors.cliqueBlue,
  },
});
