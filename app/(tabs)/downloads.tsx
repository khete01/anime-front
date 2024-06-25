import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";
import { View, Text, DimensionValue, Dimensions } from "react-native";
export default function Downloads() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>There is no downloaded video</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#040B1C",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  title: {
    fontSize: 30,
    color: "white",
    margin: "auto",
    paddingTop: 50,
  },
});
