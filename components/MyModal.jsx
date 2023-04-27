import { StyleSheet, Text, View, Button, Modal, Image } from "react-native";

const MyModal = ({ visible, text, toggle, action, data }) => {
  const onPressYes = () => {
    action(data.id);
    toggle();
  };
  const onPressNo = () => {
    toggle();
  };

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.modalView}>
        <View style={styles.modalContainer}>
          <View style={styles.textView}>
            <Text style={styles.modalText}>{text}</Text>
          </View>
          <View style={styles.buttonsView}>
            <View style={styles.button}>
              <Button title="No" color="#fa09" onPress={onPressNo} />
            </View>
            <View style={styles.button}>
              <Button title="Yes" color="#088b" onPress={onPressYes} />
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#282c44",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: "teal",
    borderRadius: 8,
    height: "25%",
    width: "80%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    textAlign: "center",
    color: "#fa0d",
    fontSize: 24,
    paddingHorizontal: 8,
  },
  buttonsView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    flex: 0.25,
  },
});

export default MyModal;
