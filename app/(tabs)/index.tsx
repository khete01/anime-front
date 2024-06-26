import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  DimensionValue,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import Genre from "@/components/genre";
import App from "@/components/app";
import App1 from "@/components/app1";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { useState } from "react";

export default function HomeScreen() {
  const [text, setText] = useState<string>();
  const [inputActive, setInputActive] = useState<boolean>(false);
  const onChangeText = (text: string) => {
    setText(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputDiv}>
        {inputActive ? (
          <TextInput
            onChangeText={onChangeText}
            value={text}
            autoFocus
            onBlur={() => setInputActive(false)}
            style={styles.input}
            placeholder=" search"
          />
        ) : (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Choose genre</Text>
            <Pressable onPress={() => setInputActive(true)}>
              <Icon name="search" style={styles.icon} size={30} />
            </Pressable>
          </View>
        )}
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
    padding: 0,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  inputDiv: {
    marginTop: 20,
    marginBottom: 10,
  },
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
  input: {
    marginTop: 40,
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  icon: {
    color: "white",
  },
  titleContainer: {
    top: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
