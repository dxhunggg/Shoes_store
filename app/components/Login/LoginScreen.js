import React, { useState } from "react";
import { View, TextInput, Button, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("Dashboard");
  };

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
        <Image source={require("../Img/Icon.png")} />
        <Text>Welcome</Text>
        <Text>Sign in to continue</Text>
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
        <View
          style={{
            height: "100%",
            width: "10%",
            marginLeft: 30,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Icon name="envelope" size={20} />
        </View>
        <TextInput
          style={{
            width: "100%",
            height: "100%",
          }}
          placeholder="Your Email"
          value={email}
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
          margin: 12,
        }}
      >
        <View
          style={{
            height: "100%",
            width: "10%",
            marginLeft: 30,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Icon name="lock" size={30} />
        </View>
        <TextInput
          style={{
            width: "100%",
            height: "100%",
          }}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
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
        <Button title="Sign in" onPress={handleLogin} />
      </View>
      <View style={{ marginBottom: 12 }}>
        <Text>OR</Text>
      </View>
      <View
        style={{
          position: "relative",
          width: "80%",
          height: 50,
          display: "inline-flex",
          padding: 16,
          alignItems: "center",
          gap: 10,
          flexDirection: "row",
          borderRadius: 5,
          borderColor: "black",
          borderWidth: 1,
          border: "2px solid var(--neutral-light, #EBF0FF)",
        }}
      >
        <View>
          <Icon name="google" size={18} color="black" />
        </View>
        <View
          style={{
            width: "100%",
            padding: "auto",
            textAlign: "center",
            gap: 10,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            style={{ width: "80%", textAlign: "center" }}
            onPress={handleLogin}
          >
            Login with Google
          </Text>
        </View>
      </View>
      <Text style={{ marginTop: 12 }}>Forgot Password?</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text>Don’t have a account?</Text>
        <Text
          style={{ color: "blue", textDecoration: "underline" }}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          Register
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
