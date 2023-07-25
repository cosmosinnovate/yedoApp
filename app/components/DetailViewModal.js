import React, { useState } from "react";
import { Modal, Text, TouchableHighlight, View, Alert, Dimensions } from "react-native";
import AppText from "./AppText";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Make it editable component

export default function DetailViewModal({ description, modalVisible = false, setModalVisible }) {
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

        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100
        }}>

          <View style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: 'white',
            padding: 20,
            alignItems: 'center',
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5
          }}>
            <AppText style={{ marginBottom: 15, fontSize: 18 }} textDecoration="none">
              Task
            </AppText>

            <AppText style={{ marginBottom: 15, fontSize: 18 }}>
              {description}
            </AppText>

            <TouchableHighlight
              style={{
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

