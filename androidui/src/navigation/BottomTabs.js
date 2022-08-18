import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import BottomNavigator from "../components/BottomNavigator";
import Favorite from "../screens/Favorite";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
