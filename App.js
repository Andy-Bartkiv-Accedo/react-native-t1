import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import ListItem from "./components/ListItem";
import MyInput from "./components/MyInput";
import MyModal from "./components/MyModal";

export default function App() {
  const [list, setList] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prevState) => !prevState);

  const addButtonHandler = (inputText) => {
    setList((prevList) => [...prevList, inputText]);
  };

  const deleteSingleItem = (itemId) => {
    setList((prevList) => prevList.filter((item, index) => index !== itemId));
  }

  const deleteItemHandler = (itemId) => {
    setDeleteId(itemId);
    const itemText = list.find((item, index) => index === itemId);
    if (itemText !== "") {
      toggleModal();
    } else {
      deleteSingleItem(itemId);
    }
  };

  const listTitle = list.length > 0 ? "List of Items:" : "No Items to show...";

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {showModal && (
          <MyModal
            text={"This Item is not empty.\nDelete anyway?"}
            toggle={toggleModal}
            action={deleteSingleItem}
            data={{id: deleteId}}
          />
        )}
        {/* HEADER */}
        <View style={styles.headerView}>
          <Text style={styles.headerTitle}>Andy's App</Text>
        </View>
        {/* INPUT Container */}
        <MyInput addButtonHandler={addButtonHandler} />

        {/* LIST Container */}
        <View style={styles.listView}>
          <Text style={styles.listTitle}>{listTitle}</Text>
          <FlatList
            data={list}
            keyExtractor={(item, index) => `id${index + item}`}
            renderItem={(data) => (
              <ListItem data={data} onDelete={deleteItemHandler} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 8,
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
