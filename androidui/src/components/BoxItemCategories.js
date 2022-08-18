import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../resources/Colors";

const BoxItemCategories = ({ text, color, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapperImg(color)}>{icon}</View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 17
  },
  wrapperImg: (color) => ({
    height: 60,
    width: 60,
    backgroundColor: color,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }),
  text: {
    marginTop: 10,
    color: Colors.darkGreen,
    fontSize: 14
  }
});

export default BoxItemCategories;
