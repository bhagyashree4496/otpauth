import { Image, View } from "react-native";
import React from "react";
import Houses from "../assets/Illustration_Dummy.png";

import Welcome from "../components/otplogin/Welcome";
import OtpForm from "../components/otplogin/OtpForm";

export default function OTPLogin() {
  return (
    <View style={{ width: "full", height: "100%", position: "relative" }}>
      <Welcome></Welcome>
      <OtpForm></OtpForm>
      <Image
        source={Houses}
        style={{ width: "100%", height: 225, position: "absolute", bottom: 3 }}
      ></Image>
    </View>
  );
}
