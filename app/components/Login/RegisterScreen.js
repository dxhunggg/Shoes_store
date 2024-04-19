import { View, Button, Text, TextInput, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordagain, setPasswordAgain] = useState("");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          marginBottom: 32,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../Img/Icon.png")}
          style={{
            width: 72,
            height: 72,
            borderRadius: 6,
            marginBottom: 12,
          }}
        />
        <Text>Let's Get Started</Text>
        <Text>Create as new account</Text>
      </View>
      <View
        style={{
          width: "80%",
          borderWidth: 1,
          borderColor: "black",
          padding: 12,
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 10,
          display: "flex",
          flexDirection: "row",
          marginBottom: 12,
        }}
      >
        <TextInput
          style={{
            width: "100%",
            height: "100%",
          }}
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View
        style={{
          width: "80%",
          borderWidth: 1,
          borderColor: "black",
          padding: 12,
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 10,
          display: "flex",
          flexDirection: "row",
          marginBottom: 12,
        }}
      >
        <TextInput
          style={{
            width: "100%",
            height: "100%",
          }}
          value={email}
          placeholder="Your Email"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View
        style={{
          width: "80%",
          borderWidth: 1,
          borderColor: "black",
          padding: 12,
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 10,
          display: "flex",
          flexDirection: "row",
          marginBottom: 12,
        }}
      >
        <TextInput
          style={{
            width: "100%",
            height: "100%",
          }}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View
        style={{
          width: "80%",
          borderWidth: 1,
          borderColor: "black",
          padding: 12,
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 10,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{
            width: "100%",
            height: "100%",
          }}
          value={passwordagain}
          secureTextEntry={true}
          placeholder="Password Again"
          onChangeText={(text) => setPasswordAgain(text)}
        />
      </View>
      <View
        style={{
          marginTop: 12,
          marginBottom: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          title="Sign up"
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </View>
      <View
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "var(--neutral-grey, #9098B1)" }}>
          have a account?{" "}
        </Text>
        <Text
          style={{ color: "blue" }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Sign in
        </Text>
      </View>
    </View>
  );
};
export default RegisterScreen;
