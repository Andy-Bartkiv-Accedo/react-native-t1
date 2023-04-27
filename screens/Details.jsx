import { View, Text } from 'react-native';
import { StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';

export default function Details({}) {

  const route = useRoute();

  return (
    <View style={styles.appContainer}>
      <Text>Details Screen</Text>
      <Text>Index: {route.params.id}</Text>
      <Text>Text: {route.params.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
