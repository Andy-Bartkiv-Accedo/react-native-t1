import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [items, setItems] = useState(['Hello Andy']);

  const addMore = (item) => {
    console.log(item);
    const newItem = item === 'Hello Andy' ? 'Hey' : 'How are you';
    setItems(items => [...items, newItem]);
  }

  console.log('Hello App');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setItems(['Hello Andy'])}>
        <Text style ={styles.text}>Refresh list</Text>
      </TouchableOpacity>
      <ActivityIndicator size={'large'} />
      <FlatList
        data = {items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => addMore(item)}>
            <Text style ={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    gap: 20,
  },
  text: {
    backgroundColor: '#234',
    padding: 10,
    borderRadius: 10,
    color: 'orange',
  }
});
