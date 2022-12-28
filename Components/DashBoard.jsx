import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { useCallback } from "react";

function DashBoard({ navigation }) {
  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/d1.png")}
        // was trying to animate it but some issue with the library
        // source={{ uri: "../assets/drive.mp4" }}
        style={[
          { width: width, height: height, paddingTop: 30 },
          styles.dashboardBg,
        ]}
      >
        <View style={styles.dashboardHeader}>
          <Text style={styles.headerText}>Test your driving skills</Text>
          <Text style={styles.headerText}>Get your driving license</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <LinearGradient colors={["#FF5A2C", "#e35b3b"]} style={styles.button}>
            <Text
              style={{
                color: "white",
                fontWeight: "700",
                textAlign: "center",
                fontSize: 22,
              }}
            >
              Get Started
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
      <StatusBar
        barStyle={"dark-content"}
        hidden={false}
        backgroundColor={"#fff"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  dashboardBg: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  dashboardHeader: {
    marginTop: 30,
    fontFamily: "monospace",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",
    textTransform: "uppercase",
  },
  button: {
    marginBottom: 40,
    borderRadius: 10,
    paddingVertical: 10,
    width: 300,
  },
});
export default DashBoard;
