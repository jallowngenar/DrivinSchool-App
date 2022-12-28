import { Text, TextInput, TouchableOpacity, View } from "react-native";

function Login({ navigation }) {
  return (
    <>
      <View style={{ marginBottom: 50 }}>
        <Text style={{ marginTop: 75, textAlign: "center", fontSize: 35 }}>
          Create an Account
        </Text>

        <View style={{ marginHorizontal: 40, marginTop: 40 }}>
          <View>
            <Text>User Name</Text>
            <TextInput
              style={{ borderBottomWidth: 0.5, padding: 5 }}
              placeholder="user@gmail.com"
            />
          </View>

          <View style={{ marginTop: 40 }}>
            <Text>Password</Text>
            <TextInput
              style={{ borderBottomWidth: 0.5, padding: 5 }}
              placeholder="Enter Password"
              secureTextEntry
            />
          </View>
        </View>

        {/*  */}
        <TouchableOpacity
          style={{
            backgroundColor: "grey",
            padding: 10,
            width: "30%",
            alignSelf: "center",
            marginTop: "50%",
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate("Services")}
        >
          <Text style={{ marginLeft: 20, color: "white", fontWeight: "900" }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default Login;
