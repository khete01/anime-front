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
import Popular from "@/components/popular";
import ForYou from "@/components/ForYou";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose genre</Text>
        <Image
          source={require("../../assets/images/Vector.png")}
          style={{ width: 21, height: 21 }}
        />
      </View>
      <Genre />
      <Popular />
      <ForYou />
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
});
