import { StyleSheet, Button, Text, View, Pressable } from 'react-native';


const ListItem = ({data, onDelete}) => {
  const deleteItemHandler = () => {
    console.log(data.index);
    onDelete(data.index);
  }

  return (
    <View style={styles.itemView}>

      <Text style={styles.itemText}>
        {`${data.index}. ${data.item}`}
      </Text>
      
      <Pressable onPress={deleteItemHandler}>
        <Text style={styles.itemDeleteBtn} >X</Text>
      </Pressable>
    </View>
  )
}

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
    fontSize: 24,
    color: "teal",
  },
  itemDeleteBtn: {
    backgroundColor: "#0886",
    borderRadius: 4,
    paddingHorizontal: 6,
    fontSize: 16,
    color: 'orange',
  },

});

export default ListItem;
