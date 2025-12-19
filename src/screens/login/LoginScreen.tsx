import React from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "react-native-svg";
import useLoginViewModel from "./LoginViewModel";

export default function LoginScreen() {
  const { username, setUsername, password, setPassword, handleLogin } =
    useLoginViewModel();

  return (
    <SafeAreaView>
      <Image
        source={require("D:/PulseCare_Frontend/assets/images/Vector.png")}
        style={{
          width: "45%",
          height: "25%",
          alignSelf: "center",
          marginTop: 50,
        }}
      />
      <Text style={{ fontSize: 30, textAlign: "center", marginTop: 20 }}>
        PulseCare
      </Text>
      <Text style={{ fontSize: 28, textAlign: "center", marginTop: 20 }}>
        Hi, Welcome Back!
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          marginTop: 10,
          color: "gray",
        }}
      >
        Hope you’re doing fine.
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Your Email : "
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password : "
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Text style={{ textAlign: "right", marginRight: 15, color: "#6839d6ff" }}>
        Forgot Password?
      </Text>
      <View
        style={{
          marginHorizontal: 15,
          marginTop: 20,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Button title="Create Account" color="#1C2A3A" onPress={handleLogin} />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          marginTop: 10,
          marginHorizontal: 15,
          borderColor: "gray",
        }}
      ></View>

      <Text style={{ textAlign: "center", marginTop: 20 }}>
        Don't have an account?{" "}
        <Text style={{ color: "#6839d6ff" }}>Sign Up</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 15,
    padding: 10,
    borderWidth: 2,
    color: "black",
    borderColor: "gray",
    margin: 15,
    borderRadius: 10,
  },
});
