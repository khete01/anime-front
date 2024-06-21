import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  DimensionValue,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Genre from "@/components/genre";
import Popular from "@/components/popular";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose genre</Text>
        <Image source={{ uri: "Vector.png" }} />
      </View>
      <Genre/>
      <Popular/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#040B1C",
    width: "100vw",
    height: "100vh",
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    margin: "auto",
  },
  titleContainer: {},
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
