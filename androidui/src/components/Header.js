import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BackIC, CartIC, DrawerIC } from "../resources/images/Icons/AllIcons";

const Header = ({ drawer, back, cart, onPress }) => {
  if (drawer) {
    return (
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={onPress}>
          <DrawerIC />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <CartIC />
        </TouchableOpacity>
      </View>
    );
  }
  if (back && cart) {
    return (
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={onPress}>
          <BackIC />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <CartIC />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.wrapperHeader}>
      <TouchableOpacity onPress={onPress}>
        <BackIC />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20
  }
});

export default Header;
