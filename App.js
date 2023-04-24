import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [items, setItems] = useState(['Hello Andy']);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
      <TouchableOpacity>
        <Text style ={styles.text}>HELLO Andy!</Text>
      </TouchableOpacity>
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
    gap: 20,
  },
  text: {
    backgroundColor: '#234',
    padding: 10,
    borderRadius: 10,
    color: 'orange',
  }
});
