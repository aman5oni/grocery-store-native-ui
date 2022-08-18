import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native";

import BoxItemTopProduct from "../components/BoxItemTopProduct";
import Gap from "../components/Gap";
import { Header } from "../components/Header";
import { Colors } from "../resources/Colors";
import {
  BrinjalIL,
  BrokoliIL,
  CauliflawerIL,
  PumpkinIL,
  RedOnionIL,
  TomatoIL
} from "../resources/images/Illustrations/AllIllustrations";

const Categories = ({ route, navigation }) => {
  const isDarkMode = useColorScheme() === "dark";
  const dataCategories = [
    {
      name: "Tometo",
      icon: TomatoIL,
      bgColor: "rgba(255, 234, 232, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name: "Pumpkin",
      icon: PumpkinIL,
      bgColor: "rgba(255, 244, 143, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name: "Brinjal",
      icon: BrinjalIL,
      bgColor: "rgba(238, 224, 248, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name: "Cauliflower",
      icon: CauliflawerIL,
      bgColor: "rgba(140, 250, 145,0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name: "Red Onion",
      icon: RedOnionIL,
      bgColor: "rgba(251, 216, 224, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name: "Brokoli",
      icon: BrokoliIL,
      bgColor: "rgba(140, 250, 145,0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ];

  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={styles.flex1}>
        {/* header */}
        <Header back cart onPress={() => navigation.goBack()} />
        <View style={styles.wrapperTittle}>
          <Text style={styles.tittle}>{route.params}</Text>
        </View>
        <Gap height={10} />
        {/* Content */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sectionBoxTopProduct}>
            {dataCategories.map((item, index) => {
              return (
                <BoxItemTopProduct
                  key={index}
                  bgColor={item.bgColor}
                  icon={item.icon}
                  text={item.name}
                  price={item.price}
                  onPress={() => navigation.navigate("Detail", item)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  wrapperTittle: {
    paddingHorizontal: 20
  },
  tittle: {
    fontSize: 20,
    color: Colors.primary
  },
  sectionBoxTopProduct: {
    flex1: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }
});

export default Categories;
