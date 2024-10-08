import { View, StyleSheet, Easing, Animated, Text, TouchableOpacity, Dimensions } from "react-native";
import colors from "./colors";
import AppText from "./AppText";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useRef, useState } from "react";
import { ScrollView, Swipeable } from "react-native-gesture-handler";
import { dateFormat } from "../utils/util.date";
import DetailViewModal from "./DetailViewModal";
import { removeTask, taskCompleted } from "../redux/tasksSlice";
import { useDispatch } from "react-redux";
import RBSheet from "react-native-raw-bottom-sheet";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenHeight = Dimensions.get("window").height;
const quarterHeight = screenHeight;

export default function CardItemView({ item }) {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(item.status);
  const swipeableRef = useRef(null);
  const rowAnimatedValues = useRef(new Animated.Value(1)).current;
  const refRBSheet = useRef();


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
      <View>
        <Animated.View style={[style.hidden, { opacity: scale, backgroundColor: 'red', borderBottomColor: 'red', borderTopWidth: 1, borderBottomWidth: 1, paddingRight: 20 }]}>
          <View style={{paddingLeft: 20 }}>
            <AppText textAlign="left" size={14} color={colors.white}>Remove...</AppText>
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
      <RBSheet
        animationType="slide"
        ref={refRBSheet}
        height={quarterHeight}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            elevation: 4,
          },
          container: {
            padding: 10,
            top: 60,
            borderRadius:20,
            elevation: 5, // For Android
            shadowColor: '#000', // For iOS
            shadowOffset: { width: 0, height: 2 }, // For iOS
            shadowOpacity: 0.1, // For iOS
            shadowRadius: 5 // For iOS

          },
          draggableIcon: {
            backgroundColor: "#000",

          }
        }}
      >
        {/* Action: Fix this scroll issue. It does scroll as expected */}
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ alignItems: 'start', justifyContent: 'start', top: 60}}>
          <AppText textAlign="left" size={14}>{item.description}</AppText>
        </ScrollView>
      </RBSheet>

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

              <AppText textAlign="left" size={10} color={colors["darkGray"]}>
                {item.user?.firstName} | {dateFormat(item.startDate)}
              </AppText>

              <AppText textAlign="left"
                size={14}
                color={colors["black"]}
                textDecoration={status ? "line-through" : "none"}
              >
                {item.title}
              </AppText>

              <View
                style={{
                  borderColor: colors["darkGray"],
                  paddingTop: 6,
                  display: "flex",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderColor: 'transparent',
                    borderRadius: 10,
                    elevation: 2,
                  }}
                  onPress={() => {
                    refRBSheet.current.open()
                  }}
                >
                  <AppText textAlign="left" size={12}>Notes</AppText>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
        
      </Animated.View>

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
    backgroundColor: colors.yenoBlue,
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
