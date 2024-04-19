import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {
  const navigation = useNavigation();

  const goToCart = () => {
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftIcon}>
        <Icon name="list" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightIcon}>
        <Icon name="shopping-cart" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    width: "100%",
    paddingHorizontal: 10,
  },
  leftIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Header;
