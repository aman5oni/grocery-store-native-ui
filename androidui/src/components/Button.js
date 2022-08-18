import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../resources/Colors";

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: 50,
    width: 259,
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center"
  },
  text: {
    fontSize: 18,
    color: Colors.white,
    textAlign: "center"
  }
});

export default Button;
