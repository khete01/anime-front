import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GenreButton = ({ genre }) => {
  const handlePress = () => {
    console.log(`${genre} button pressed`);
  };

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
      <Text style={styles.buttonText}>{genre}</Text>
    </TouchableOpacity>
  );
};

export default function Genre() {
  const genres = [
    "Action",
    "Adventure",
    "Horror",
    "Fantasy",
    "Drama",
    "Thriller",
    "Romance",
    "More...",
  ];

  return (
    <View style={styles.container}>
      {genres.map((genre) => (
        <GenreButton key={genre} genre={genre} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  buttonContainer: {
    backgroundColor: "#E45959",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    margin: 5,
    width: 100,
    height: 30,
  },
  buttonText: {
    fontSize: 15,
    color: "white",
  },
});
