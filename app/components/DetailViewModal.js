import React, { useRef, useState } from "react";
import { Modal, Text, TouchableHighlight, View, Alert, Dimensions } from "react-native";
import AppText from "./AppText";
import { ScrollView } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Make it editable component

export default function DetailViewModal({ description, modalVisible = false, setModalVisible }) {

  return (
    <View>
      <ScrollView style={{
        width: windowWidth,
        height: windowHeight,
      }}>
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
            backgroundColor: 'white',
            padding: 20,
            alignItems: 'center',
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
              width: windowWidth,
              height: windowHeight,
            shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5
          }}>
            <AppText style={{ marginBottom: 15}} textDecoration="none">Notes</AppText>
            <AppText style={{ marginBottom: 15}}>
              {description}
            </AppText>

            <AppText style={{ marginBottom: 15 }}>
              {description.length}
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
                </ScrollView>
    </View>
  );
};

