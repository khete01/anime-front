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
    top: 10,
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    columnGap: 3,
  },
  buttonContainer: {
    backgroundColor: "#E45959",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "24%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});
