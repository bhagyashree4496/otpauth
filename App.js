import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
  Jost_800ExtraBold,
  Jost_900Black,
} from "@expo-google-fonts/jost";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

import WelcomeScreen from "./screens/WelcomeScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import OTPLogin from "./screens/OTPLogin";

const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_800ExtraBold,
    Jost_900Black,
  });
  if (!fontsLoaded) {
    return <WelcomeScreen></WelcomeScreen>;
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="otplogin">
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="otplogin"
            component={OTPLogin}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar></StatusBar>
    </>
  );
}
