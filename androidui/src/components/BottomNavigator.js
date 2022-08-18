import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../resources/Colors";
import {
  FavoriteIC,
  FavoriteColorIC,
  HomeIC,
  HomeColorIC,
  NotificationIC,
  NotificationColorIC,
  ProfileIC,
  ProfileColorIC
} from "../resources/images/Icons/AllIcons";

const Icon = ({ label, isFocused }) => {
  switch (label) {
    case "Home":
      return isFocused ? <HomeColorIC /> : <HomeIC />;
    case "Favorite":
      return isFocused ? <FavoriteColorIC /> : <FavoriteIC />;
    case "Notification":
      return isFocused ? <NotificationColorIC /> : <NotificationIC />;
    case "Profile":
      return isFocused ? <ProfileColorIC /> : <ProfileIC />;
    default:
      return <HomeColorIC />;
  }
};

const BottomNavigator = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon label={label} isFocused={isFocused} />
            {/* <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    paddingTop: 28,
    paddingBottom: 33,
    paddingHorizontal: 32,
    justifyContent: "space-between"
  }
});

export default BottomNavigator;
