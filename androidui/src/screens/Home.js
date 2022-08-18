import React from "react";
import {
  View,
  Text,
  useColorScheme,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
import BoxItemCategories from "../components/BoxItemCategories";
import BoxItemTopProduct from "../components/BoxItemTopProduct";
import Gap from "../components/Gap";
import Header from "../components/Header";
import { Colors } from "../resources/Colors";
import {
  BakeryIC,
  Bakery2IC,
  DrinksIC,
  FruitsIC,
  SearchIC,
  VegetablesIC
} from "../resources/images/Icons/AllIcons";
import {
  CauliflawerIL,
  GrapesIL,
  GreenteaIL,
  TomatoIL
} from "../resources/images/Illustrations/AllIllustrations";

const Home = ({ navigation }) => {
  const isDarkMode = useColorScheme() === "dark";
  const dataTopProducts = [
    {
      name: "Grapes",
      icon: GrapesIL,
      bgColor: "rgba(227,206,243,0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name: "Tometo",
      icon: TomatoIL,
      bgColor: "rgba(255, 234, 232, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name: "Drinks",
      icon: GreenteaIL,
      bgColor: "rgba(187, 208, 136, 0.5)",
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
      name: "Grapes",
      icon: GrapesIL,
      bgColor: "rgba(227,206,243,0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name: "Tometo",
      icon: TomatoIL,
      bgColor: "rgba(255, 234, 232, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name: "Drinks",
      icon: GreenteaIL,
      bgColor: "rgba(187, 208, 136, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name: "Cauliflower",
      icon: CauliflawerIL,
      bgColor: "rgba(140, 250, 145,0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ];
  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={styles.flex1}>
        {/* Header */}
        <Header drawer />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* search */}
          <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.wrapperSearch}>
              <TextInput placeholder="Search" style={styles.textInputSearch} />
              <SearchIC />
            </View>
          </View>
          {/* categories */}
          <View>
            <Text style={styles.titleCategories}>Categories</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scrollViewCategories}
            >
              <BoxItemCategories
                icon={<FruitsIC />}
                color="rgba(169, 178, 169, 0.5)"
                text="Fruits"
                onPress={() => navigation.navigate("Categories", "Fruits")}
              />
              <BoxItemCategories
                icon={<VegetablesIC />}
                color="rgba(233, 255, 210, 0.5)"
                text="Vegetables"
                onPress={() => navigation.navigate("Categories", "Vegetables")}
              />
              <BoxItemCategories
                icon={<DrinksIC />}
                color="rgba(140, 175, 53, 0.5)"
                text="Drinks"
                onPress={() => navigation.navigate("Categories", "Drinks")}
              />
              <BoxItemCategories
                icon={<BakeryIC />}
                color="rgba(214, 255, 218, 0.5)"
                text="Bakery"
                onPress={() => navigation.navigate("Categories", "Bakery")}
              />
              <BoxItemCategories
                icon={<Bakery2IC />}
                color="rgba(255, 250, 204, 0.5)"
                text="Bakery"
                onPress={() => navigation.navigate("Categories", "Bakery")}
              />
            </ScrollView>
          </View>
          <Gap height={24} />
          {/* top products */}
          <View>
            <View style={styles.wrapperHeadTopProducts}>
              <Text style={styles.tittleTopProducts}>Top Products</Text>
              <TouchableOpacity>
                <Text style={styles.textSeeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionBoxTopProduct}>
              {dataTopProducts.map((item, index) => {
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
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: { flex: 1 },
  wrapperSearch: {
    height: 40,
    backgroundColor: Colors.lightGrey,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25
  },
  titleCategories: {
    fontSize: 18,
    color: Colors.primary,
    padding: 20
  },
  scrollViewCategories: {
    paddingLeft: 20
  },
  wrapperHeadTopProducts: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10
  },
  tittleTopProducts: {
    color: Colors.primary,
    fontSize: 20
  },
  textSeeAll: {
    color: Colors.black,
    fontSize: 12
  },
  sectionBoxTopProduct: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }
});

export default Home;
