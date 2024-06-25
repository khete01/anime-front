import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/medium.jpg")} />
      
      <View style={styles.playButton}>
        <Image
          source={require("../../assets/images/Ellipse 6.png")}
          style={{ position: "absolute" }}
        />
        <Image source={require("../../assets/images/Vector (1).png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#040B1C",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex: 1,
    alignItems: "center",
  },
  playButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
