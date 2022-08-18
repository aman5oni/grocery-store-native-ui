import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import Gap from "../components/Gap";
import { Colors } from "../resources/Colors";
import { GetStartedIL } from "../resources/images/Illustrations/AllIllustrations";

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Image source={GetStartedIL} style={styles.image} />
      <View style={styles.wrapperSlogan}>
        <Text style={styles.txtSlogan}>Shop Your Daily </Text>
        <Text style={styles.txtSlogan}>Necessary</Text>
      </View>
      <Gap height={90} />
      <Button
        onPress={() => navigation.replace("BottomTab")}
        text="Get Started"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, paddingHorizontal: 20, justifyContent: "center" },
  image: { height: 225, width: "100%", resizeMode: "stretch" },
  wrapperSlogan: { marginTop: 51 },
  txtSlogan: {
    fontSize: 30,
    color: Colors.primary,
    textAlign: "center"
  }
});

export default GetStarted;
