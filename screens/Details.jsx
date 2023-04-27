import { View, Text, Image } from 'react-native';
import { StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';

export default function Details({}) {

  const route = useRoute();

  return (
    <View style={styles.appContainer}>
      <Image style={styles.image} source={require('../assets/images/goal.png')}/>
      <Text style={styles.itemText}>Index: {route.params.id}</Text>
      <Text style={styles.itemText}>Text: {route.params.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    gap: 20,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  image: {
    resizeMode: 'center',
    width: 100,
    height: 100,
  },
  itemText: {
    fontSize: 24,
    color: "teal",
  },
});
