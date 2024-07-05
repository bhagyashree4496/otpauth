import { View, Image } from "react-native";
import React from "react";
import logo from "../assets/image.png";
import Houses from "../assets/Illustration_Dummy.png";

export default function WelcomeScreen({ navigation }) {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "full",
        paddingHorizontal: 20,
      }}
    >
      <Image
        source={logo}
        style={{ width: 174, height: 180, position: "absolute", top: "30%" }}
      ></Image>
      <Image
        source={Houses}
        style={{ width: "100%", height: 225, position: "absolute", bottom: 3 }}
      ></Image>
    </View>
  );
}
