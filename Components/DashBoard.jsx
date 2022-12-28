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

function DashBoard({ navigation }) {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/d1.jpeg")}
        style={[
          { width: width, height: height, paddingTop: 30 },
          styles.dashboardBg,
        ]}
      >
        {/* <View
          style={[{ width: width, height: height }, styles.viewOverlay]}
        ></View> */}
        <View style={styles.dashboardHeader}>
          <Text style={styles.headerText}>Test your driving skills</Text>
          <Text style={styles.headerText}>Get your driving license</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <LinearGradient
            colors={["#1ACABC", "#073ABBA3"]}
            style={styles.button}
          >
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
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    // backgroundColor: "#00cc00",
    // backgroundColor: "#000",
    position: "relative",
  },
  dashboardBg: {
    // paddingTop: 30,
    justifyContent: "space-between",
    alignItems: "center",
    // position: "absolute",
  },
  dashboardHeader: {
    marginTop: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#dcdcdc",
    textTransform: "uppercase",
  },
  button: {
    // marginTop: "120%",
    // marginLeft: "60%",
    // backgroundColor: "grey",
    // padding: 10,
    marginBottom: 40,
    borderRadius: 10,
    paddingVertical: 10,
    width: 300,
  },
  // viewOverlay: {
  //   backgroundColor: "#000",
  //   position: "absolute",
  //   opacity: 0.6,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   // top: 20,
  // },
});
export default DashBoard;
