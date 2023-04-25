import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import ListItem from "./components/ListItem";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  const textInputHandler = (enteredText) => {
    setInputText(enteredText);
  };

  const addButtonHandler = () => {
    setList((prevList) => [...prevList, inputText]);
  };

  return (
    <View style={styles.appContainer}>
      {/* HEADER */}
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>Andy's App</Text>
      </View>
      {/* INPUT Container */}
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

      {/* LIST Container */}
      <View style={styles.listView}>
        <Text style={styles.listTitle}>List of Items:</Text>
        <FlatList
          data={list}
          keyExtractor={(item, index) => `id${index + item}`}
          renderItem={(data) => <ListItem data={data} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 8,
    backgroundColor: "#282c34",
  },

  headerView: {
    backgroundColor: "#282c44",
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: "orange",
    borderRadius: 10,
  },
  headerTitle: {
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    color: "orange",
    fontSize: 28,
    fontFamily: "serif",
    fontStyle: "italic",
  },

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

  listView: {
    flex: 1,
  },
  listTitle: {
    fontSize: 24,
    paddingVertical: 8,
    color: "#eee",
    textAlign: "center",
  },

});
