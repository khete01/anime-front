import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  DimensionValue,
  Dimensions,
} from "react-native";
import Genre from "@/components/genre";
import App from "@/components/app";
import App1 from "@/components/app1";
import { Link } from "expo-router";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose genre</Text>
        <Image
          source={require("../../assets/images/search.png")}
          style={{ width: 21, height: 21 }}
        />
        {/* <Link href="/anime/1" style={{ color: "white" }}>
          Anime 1
        </Link> */}
      </View>
      <Genre />
      <App1 />
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#040B1C",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  title: {
    paddingTop: 30,
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  titleContainer: { display: "flex" },
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
  linkText: {
    color: "white",
    fontSize: 16,
  },
});
