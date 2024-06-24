import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Popular = ({ anime }) => {
  const {
    attributes: {
      canonicalTitle,
      episodeCount,
      posterImage: { medium },
    },
  } = anime;

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={{ uri: medium }}
          resizeMode="cover"
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{canonicalTitle}</Text>
          <Text style={styles.episodeCount}>
            Episodes: {episodeCount ? episodeCount : "Ongoing"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    height: 200,
  },
  container: {
    // backgroundColor: "#222",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    width: 160,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  detailsContainer: {
    margin: "auto",
    // alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 5,
  },
  episodeCount: {
    color: "white",
    textAlign: "center",
  },
});

export default Popular;
