import { useState } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";

const MyModal = ({toggle}) => {

  const onPressHandler = () => {
    console.log('button');
    toggle();
  };
  
  return (
    <Modal animationType='fade' transparent={true}>
      <View style={styles.modalView}>
        <View style={styles.modalContainer}>
          <View style={styles.textView}>
            <Text style={styles.modalText}>ARE YOU SURE</Text>
          </View>
          <View style={styles.buttonsView}>
            <View style={styles.button}>
              <Button title="No" color="red" onPress={onPressHandler} />
            </View>
            <View style={styles.button}>
              <Button title="Yes" color="green" onPress={onPressHandler} />
            </View>
          </View>
        </View>
      </View>

    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: "#282c34cc",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#282c44",
    borderWidth: 2,
    borderColor: "teal",
    borderRadius: 8,
    height: '25%',
    width: '80%',
    justifyContent: 'space-evenly',
  },
  textView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    color: "#fa0d",
    fontSize: 24,
    paddingHorizontal: 8,
  },
  buttonsView: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    flex: .25,
  }
});

export default MyModal;