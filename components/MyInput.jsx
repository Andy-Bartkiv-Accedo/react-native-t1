import { StyleSheet, TextInput, View, Button } from 'react-native';

const MyInput = ({addButtonHandler, textInputHandler}) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholderTextColor={"teal"}
        placeholder="Your input"
        onChangeText={textInputHandler}
      />
      <View style={styles.inputBtn}>
        <Button title="Add" color="teal" onPress={addButtonHandler} />
      </View>
  </View>
  )
}

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
    borderRadius: 10,
  },
});

export default MyInput