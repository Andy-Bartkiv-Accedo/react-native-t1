import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./screens/Home";
import Details from './screens/Details';
import MyHeader from "./components/MyHeader";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#282c44" },
            headerTintColor: 'orange',
            contentStyle: { backgroundColor: "#282c34" },

        }}>
          <Stack.Screen name="Home" component={Home} options={{
            headerTitle: (props) => <MyHeader {...props} />
          }}/>
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {

  },
});
