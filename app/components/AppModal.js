import React, { useState } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Dimensions,
} from "react-native";
import AppText from "./AppText";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AppModal = ({ description, modalVisible = false, setModalVisible }) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <View
            style={{
              width: windowWidth,
              height: windowHeight,
              backgroundColor: "white",
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <AppText style={{ marginBottom: 15, textAlign: "center" }}>
              {description}
            </AppText>

            <TouchableHighlight
              style={{
                // backgroundColor: "#2196F3",
                borderRadius: 20,
                padding: 10,
                elevation: 2,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <AppText>Close</AppText>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AppModal;
