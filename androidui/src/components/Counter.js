import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  ButtonMinIC,
  ButtonPlusIC
} from "../resources/images/Icons/AllIcons";

const Counter = ({ onValueChange }) => {
  const [value, setValue] = useState(1);
  useEffect(() => {
    onValueChange(value);
  }, [onValueChange, value]);

  const onCount = (type) => {
    let result = value;
    if (type === "plus") {
      result = value + 1;
    }
    if (type === "minus") {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <TouchableOpacity onPress={() => onCount("minus")}>
        <ButtonMinIC />
      </TouchableOpacity>
      <Text style={{ marginHorizontal: 10 }}>{value}</Text>
      <TouchableOpacity onPress={() => onCount("plus")}>
        <ButtonPlusIC />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
