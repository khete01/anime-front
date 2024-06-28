import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Anime } from "../types"; // Adjust the path as necessary

export default function DetailsScreen() {
  const { anime: animeString } = useLocalSearchParams<{ anime?: string }>();

  let anime: Anime | null = null;
  if (animeString) {
    try {
      anime = JSON.parse(animeString);
    } catch (e) {
      console.error("Failed to parse anime details:", e);
    }
  }

  if (!anime) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No anime details found.</Text>
      </View>
    );
  }

  const {
    attributes: { canonicalTitle, episodeCount, posterImage, description, startDate },
  } = anime;

  return (
    <View style={styles.container}>
      <Image source={{ uri: posterImage.medium }} style={styles.posterImage} />
      <Text style={styles.title}>{canonicalTitle}</Text>
      <Text style={styles.details}>
        Episodes: {episodeCount ? episodeCount : "Ongoing"}
      </Text>
      <Text style={styles.details}>Start Date: {startDate}</Text>
      <Text style={styles.description}>{description}</Text>

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
    padding: 20,
  },
  errorText: {
    color: "white",
    fontSize: 18,
  },
  posterImage: {
    width: 200,
    height: 300,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  playButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
