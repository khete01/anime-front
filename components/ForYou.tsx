import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ForYou() {
  return (
    <View>
      <Text style={styles.title}>For You</Text>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/images/Rectangle 23 (1).png")}
          style={{ width: 124, height: 185 }}
        />
        <Image
          source={require("../assets/images/Rectangle 24.png")}
          style={{ width: 124, height: 185 }}
        />
        <Image
          source={require("../assets/images/Rectangle 25.png")}
          style={{ width: 124, height: 185 }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
});
