import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Adsbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.ads}>
          <Text style={styles.text1}>20% Discount</Text>
          <Text style={styles.text2}>for your first purchase</Text>
          <TouchableOpacity style={styles.shopnow}>
            <Text style={styles.text3}>Shop now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewv}>
        <Image source={require("../Img/Green.png")} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  box: {
    marginTop: 24,
    width: "100%",
    height: 180,
    backgroundColor: "#EFEFEF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
  },
  ads: {
    height: "100%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 16,
    marginLeft: 20,
  },
  shopnow: {
    height: 29,
    width: 96,
    borderRadius: 16,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: "#202727",
    fontSize: 30,
  },
  text2: {
    color: "#202727",
    fontSize: 14,
  },
  text3: {
    color: "#FFF",
    fontSize: 10,
  },
  viewv: {
    position: "relative",
    left: 0,
    top: 10,
  },
  image: {
    width: 220,
    height: 100,
    position: "absolute",
    borderRadius: 6,
    top: -150,
    left: 180,
    transform: [{ rotate: "-30deg" }],
  },
});

export default Adsbox;
