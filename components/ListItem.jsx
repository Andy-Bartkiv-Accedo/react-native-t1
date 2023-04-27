import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({data, onDelete }) => {

  const navigation = useNavigation();

  console.log(data);

  onItemPress = () => navigation.navigate('Details', {id: data.index, text: data.item});
  
  const deleteItemHandler = () => {
    onDelete(data.index);
  }

  return (
    <Pressable onPress={onItemPress}>
      <View style={styles.itemView}>

        <Text style={styles.itemText}>
          {`${data.index + 1}. ${data.item}`}
        </Text>
        
        <Pressable onPress={deleteItemHandler}
          style={({ pressed }) => pressed && styles.pressedBtn}
        >
          <Text style={styles.itemDeleteBtn}>X</Text>
        </Pressable>
      </View>

    </Pressable>
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
  pressedBtn: {
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 4,
  },

});

export default ListItem;
