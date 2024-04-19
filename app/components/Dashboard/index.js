import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Header from "./Header";
import Adsbox from "./Adsbox";
import ListProduct from "./ListProduct";
import Navigation from "./Navigation";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.tag}>
        <TextInput style={styles.tagTimKiem} placeholder="Tìm kiếm" />
      </View>
      <Adsbox />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>All</Text>
      </TouchableOpacity>
      <ListProduct />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 16,
  },
  tag: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    flexDirection: "row",
  },
  tagTimKiem: {
    flex: 1,
    height: "100%",
    backgroundColor: "gray",
    borderRadius: 10,
    padding: 10,
  },
  buttonContainer: {
    backgroundColor: "black",
    borderRadius: 18,
    width: 72,
    height: 36,
    marginTop: 24,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    paddingTop: 7,
  },
});

export default Dashboard;
