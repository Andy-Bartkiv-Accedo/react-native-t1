import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const MyInput = ({ addButtonHandler }) => {

  const [inputText, setInputText] = useState("");
  
  const onPressHandler = () => {
    setInputText('');
    addButtonHandler(inputText);
  };
  
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholderTextColor={"teal"}
        placeholder="Your input"
        value={inputText}
        onChangeText={setInputText}
      />
      <View style={styles.inputBtn}>
        <Button title="Add" color="teal" onPress={onPressHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: "#282c44",
    borderBottomWidth: 1,
    borderBottomColor: "teal",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: "teal",
    borderRadius: 4,
    color: "#fa0d",
    fontSize: 24,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  inputBtn: {
    flex: 0.25,
  },
});

export default MyInput;
