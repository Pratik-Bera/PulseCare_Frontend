import GlobalStyles from "@/src/utils/Styles";
import React from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import { SafeAreaView } from "react-native-safe-area-context";
import useLoginViewModel from "../login/LoginViewModel";
import useRegistrationViewModel from "./RegistrationViewModel";

export default function RegistrationScreen() {
  const {} = useRegistrationViewModel();
  const { username, setUsername, password, setPassword, handleLogin } =
    useLoginViewModel();

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView>
      <Image
        source={require("D:/PulseCare_Frontend/assets/images/Vector.png")}
        style={{
          width: "50%",
          height: "25%",
          alignSelf: "center",
          marginTop: 50,
        }}
      />
      <Text style={{ fontSize: 30, textAlign: "center", marginTop: 20 }}>
        PulseCare
      </Text>
      <Text style={{ fontSize: 28, textAlign: "center", marginTop: 20 }}>
        Create Account
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          marginTop: 10,
          color: "gray",
        }}
      >
        We are here to help you!
      </Text>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Your Name : "
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
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
        <TextInput
          style={styles.textInput}
          placeholder="Your Phone Number : "
          onChangeText={(text) => setUsername(text)}
          value={username}
        />        
        <TextInput
          style={styles.textInput}
          placeholder="Gender : "
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Address : "
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
      </View>
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
        <Text style={{ color: "#6839d6ff" }} >Sign In</Text>
      </Text>
      </ScrollView>
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
