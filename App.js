// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import DashBoard from "./Components/DashBoard";
import Login from "./Components/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Services from "./Components/Services";
import Form from "./Components/Form";
import Register from "./Components/Register";
import Discription from "./Components/Discription";
// import { useCallback } from "react";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Lobster: require("./assets/fonts/Lobster-Regular.ttf"),
    Righteous: require("./assets/fonts/Righteous-Regular.ttf"),
    "roboto-i": require("./assets/fonts/Roboto-LightItalic.ttf"),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (isFontsLoaded) {
  //     // await SplashScreen.hideAsync();
  //   }
  // }, [isFontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Discription" component={Discription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
{
  /* <DashBoard/>
      <Login/>
      <StatusBar style="auto" /> */
}
