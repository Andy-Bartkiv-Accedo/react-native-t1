import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ListItem from "./components/ListItem";
import MyInput from "./components/MyInput";

export default function App() {
  const [list, setList] = useState([]);

  const addButtonHandler = (inputText) => {
    setList((prevList) => [...prevList, inputText]);
  };

  return (
    <View style={styles.appContainer}>
      {/* HEADER */}
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>Andy's App</Text>
      </View>
      {/* INPUT Container */}
      <MyInput
        addButtonHandler={addButtonHandler}
      />

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
