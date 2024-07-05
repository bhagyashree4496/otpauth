import { Image, ScrollView, Text } from "react-native";
import React from "react";

import Welcome from "../components/otplogin/Welcome";
import OtpForm from "../components/otplogin/OtpForm";

export default function OTPLogin() {
  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      style={{
        flex: 1,
        width: "full",
        position: "relative",
        backgroundColor: "#fff",
      }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Welcome></Welcome>
      <OtpForm></OtpForm>

      <Image
        source={require("../assets/Illustration_Dummy.png")}
        style={{
          width: "100%",
          height: 225,
          position: "absolute",
          bottom: 0,
        }}
      ></Image>
    </ScrollView>
  );
}
