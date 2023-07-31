import { View, StyleSheet, TouchableHighlight, Easing, Animated, Text } from "react-native";
import colors from "./colors";
import AppText from "./AppText";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useRef, useState } from "react";
import { Swipeable } from "react-native-gesture-handler";
import { dateFormat } from "../utils/util.date";
import DetailViewModal from "./DetailViewModal";
import { removeTask, taskCompleted } from "../redux/tasksSlice";
import { useDispatch } from "react-redux";

export default function CardItemView({ item }) {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(item.status);
  const swipeableRef = useRef(null);
  const rowAnimatedValues = useRef(new Animated.Value(1)).current;

  const onPressCompleteTask = async (id) => {
    // Wait for 1 second before dispatching the action
    setStatus(!item.status);
    dispatch(taskCompleted({ id: id, status: !item.status }));
  };


  const onDeleteTask = async (id) => {
    if (swipeableRef.current) {
      swipeableRef.current.close();
    }
    dispatch(removeTask(id))
  };

  const renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-200, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <View style={{ flex: 1 }} >
        <Animated.View style={[style.hidden, { opacity: scale, borderTopColor: 'red', borderBottomColor: 'red', borderTopWidth: 1, borderBottomWidth: 1 }]}>
          <View>
            <Text>Remove...</Text>
          </View>
        </Animated.View>
      </View >
    );
  };

  return (
    <Swipeable
      ref={swipeableRef}
      renderRightActions={renderRightActions}
      onSwipeableOpen={() => onDeleteTask(item._id)
      }
    >
      <Animated.View style={{ transform: [{ scale: rowAnimatedValues }] }}>
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
                {item.user?.firstName} | {dateFormat(item.startDate)}
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
                  borderRadius: 10,
                  display: "flex",
                }}
              >
                <TouchableHighlight
                  style={{
                    borderColor: 'transparent',
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
      </Animated.View>
      {/* TODO: Open this detail view in edit view */}
      <DetailViewModal setModalVisible={setModalVisible} modalVisible={modalVisible} description={item.description} />

    </Swipeable >
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
  rightAction: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  actionView: {
    width: 80,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  hidden: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    backgroundColor: 'transparent',
  },
});
