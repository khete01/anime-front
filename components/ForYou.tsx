import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

const ForYou = ({ anime }) => {
  const {
    attributes: {
      canonicalTitle,
      episodeCount,
      posterImage: { medium },
    },
  } = anime;

  return (
    <Link href="/anime/id">
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
    </Link>
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
    // marginTop: 10,
    // alignItems: "center",
  },
  title: {
    fontSize: 15,
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

export default ForYou;
