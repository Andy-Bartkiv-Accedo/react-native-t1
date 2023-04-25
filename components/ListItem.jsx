import { StyleSheet, Text, View } from 'react-native';

const ListItem = ({data}) => {
  return (
    <View>
      <Text style={styles.listText}>
        {`${data.index}. ${data.item}`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listText: {
    marginVertical: 4,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: "teal",
    borderRadius: 4,
    fontSize: 24,
    color: "teal",
  },
});

export default ListItem;
