import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ListItem = ({ data, onDelete }) => {
  const navigation = useNavigation();

  onItemPress = () =>
    navigation.navigate("Details", { id: data.index, text: data.item });

  const deleteItemHandler = () => {
    onDelete(data.index);
  };

  return (
    <Pressable onPress={onItemPress}>
      <View style={styles.itemView}>
        <Text style={styles.itemText}>{`${data.index + 1}. ${data.item}`}</Text>

        <Pressable
          onPress={deleteItemHandler}
          style={({ pressed }) => [
            styles.itemDeleteBtn,
            pressed && styles.pressedBtn,
          ]}
        >
          {/* <Text style={styles.itemDeleteBtn}>X</Text> */}
          <Ionicons name="trash" size={20} color="#fa0d" />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "teal",
    borderRadius: 4,
    marginVertical: 4,
    paddingHorizontal: 6,
  },
  itemText: {
    flex: 1,
    fontSize: 24,
    color: "teal",
    marginRight: 4,
  },
  itemDeleteBtn: {
    backgroundColor: "#0886",
    borderRadius: 4,
    paddingHorizontal: 4,
    color: "orange",
  },
  pressedBtn: {
    borderColor: "orange",
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default ListItem;
