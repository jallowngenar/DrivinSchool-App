import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";

function Register({ navigation }) {
  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <Text>Create an Account</Text>

        <View style={{ marginHorizontal: 40, marginTop: 40 }}>
          <View style={styles.textContainer}>
            {/* <Text>User Name</Text> */}
            <TextInput
              // style={{ borderBottomWidth: 0.5, padding: 5 }}
              style={styles.textInput}
              placeholder="user@gmail.com"
            />
          </View>

          <View style={styles.textContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Password"
              secureTextEntry
            />
          </View>
        </View>

        {/*  */}
        <TouchableOpacity
          style={styles.registerBtn}
          onPress={() => navigation.navigate("Services")}
        >
          <Text style={{ color: "white", fontWeight: "900" }}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
export default Register;
