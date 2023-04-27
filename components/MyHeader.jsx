import { StyleSheet, Text, View } from "react-native";

const MyHeader = () => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerTitle}>Andy's App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerView: {
    flex: .96,
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
});


export default MyHeader;