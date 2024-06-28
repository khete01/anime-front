import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Anime } from "../app/types"; // Adjust the path as necessary

interface PopularProps {
  anime: Anime;
}

const Popular: React.FC<PopularProps> = ({ anime }) => {
  const router = useRouter();
  const {
    attributes: {
      canonicalTitle,
      episodeCount,
      posterImage: { medium },
    },
  } = anime;

  const handlePress = () => {
    router.push({
      pathname: `/anime/[id]`,
      params: { anime: JSON.stringify(anime) }
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
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
    </TouchableOpacity>
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
    padding: 10,
    borderRadius: 8,
    width: 160,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  detailsContainer: {
    margin: "auto",
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

export default Popular;
