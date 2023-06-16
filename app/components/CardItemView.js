import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import icons from "../assets/Icons";
import colors from "./colors";
import AppText from "./AppText";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";
import { Swipeable } from "react-native-gesture-handler";
import { dateFormat } from "../util/util.date";
import AppModal from "./AppModal";

export default function CardItemView({ item, renderRightActions }) {
  const [status, setStatus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Swipeable renderRightActions={renderRightActions} animationOptions={{}}>
      <View style={style.item}>
        <BouncyCheckbox
          size={24}
          fillColor={colors["black"]}
          innerIconStyle={{ borderWidth: 2 }}
          unfillColor={"transparent"}
          onPress={(isChecked) => {
            setStatus(() => isChecked);
          }}
        />
        <View style={[style.contentItems]}>
          <View style={style.divider} />
          <View style={style.contentBody}>
            <AppText size={18} color={colors["darkGray"]}>
              {item.user.firstName} | {dateFormat(item.createdAt)}
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
      <AppModal setModalVisible={setModalVisible} modalVisible={modalVisible} description={item.description} />
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
