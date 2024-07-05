import React, { useEffect } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

function HomeScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(otplogin);
    }, 2000);
  }, []);
  return (
    <View>
      <Button
        title="welcome"
        onPress={() => {
          navigation.navigate("welcome");
        }}
      ></Button>
    </View>
  );
}

export default HomeScreen;
