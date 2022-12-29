import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
function Services({ navigation }) {
  const Pakages = [
    {
      description: "One month with license and certificate.",
      price: " 14,000",
    },
    { description: "Three weeks with Learner License", price: " 10,000" },
    {
      description: "One month with license and certificate",
      price: " 8,000",
    },
    { description: "Three weeks with learner license", price: " 5,000" },
    {
      description: "One month with license and certificate",
      price: " 4,000",
    },
  ];

  return (
    <ScrollView style={{ marginTop: 10 }}>
      {/* <LinearGradient color={["#00FFEB", "#073ABB"]}></LinearGradient> */}
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 30,
            fontWeight: "bold",
            color: "#FF5A2C",
            fontStyle: "italic",
            paddingVertical: 20,
          }}
        >
          Our Services
        </Text>
        {Pakages.map(
          (item, index) => (
            <LinearGradient
              style={styles.priceCard}
              key={index}
              colors={["#ff5a2c", "#e33b74"]}
            >
              <View style={styles.priceCard}>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 35,
                    fontWeight: "700",
                    color: "#fff",
                  }}
                >
                  <Text style={{ fontSize: 22 }}>GMD</Text>
                  {item.price}
                </Text>
                <Text
                  style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}
                >
                  {item.description}
                </Text>

                <TouchableOpacity
                  onPress={() => navigation.navigate("Discription")}
                  style={styles.subscribeBtn}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 28, color: "#fff" }}>
                      Subscribe
                    </Text>
                    <FontAwesome
                      name="angle-right"
                      size={40}
                      //   color="black"
                      style={{ marginLeft: 20, color: "#fff" }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          ),

          {
            /* 
              <View style={styles.priceCard}>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>
                  {item.two}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "500", fontSize: 30 }}>
                    D10, 000
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Discription")}
                  >
                    <FontAwesome
                      name="angle-right"
                      size={40}
                      color="black"
                      style={{ marginLeft: 40 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.priceCard}>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>
                  {item.three}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "500", fontSize: 30 }}>D8000</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Discription")}
                  >
                    <FontAwesome
                      name="angle-right"
                      size={40}
                      color="black"
                      style={{ marginLeft: 40 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.priceCard}>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>
                  {item.four}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 30, fontWeight: "500" }}>D4000</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Discription")}
                  >
                    <FontAwesome
                      name="angle-right"
                      size={40}
                      color="black"
                      style={{ marginLeft: 40 }}
                    />
                  </TouchableOpacity>
                </View>
              </View> */
          }
        )}
      </View>
    </ScrollView>
  );
}
const WindowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  priceCard: {
    // backgroundColor: "#8D90DB",
    width: WindowWidth - 30,
    height: 250,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    color: "#fff",

    justifyContent: "space-evenly",
  },
  subscribeBtn: {
    backgroundColor: "#080808",
    color: "#fff",
    paddingVertical: 3,
    width: "70%",
    opacity: 0.7,
    borderRadius: 10,
  },
});

export default Services;
