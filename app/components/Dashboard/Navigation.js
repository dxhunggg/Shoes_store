import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Navigation = () => {
  const [value, setValue] = useState("home");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          name="home"
          size={30}
          style={[
            styles.icon,
            { backgroundColor: value === "home" ? "lightgray" : "" },
          ]}
          onPress={() => handleChange("home")}
        />
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name="save"
          size={30}
          style={[
            styles.icon,
            { backgroundColor: value === "save" ? "lightgray" : "" },
          ]}
          onPress={() => handleChange("save")}
        />
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name="bell"
          size={30}
          style={[
            styles.icon,
            { backgroundColor: value === "noti" ? "lightgray" : "" },
          ]}
          onPress={() => handleChange("noti")}
        />
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name="user"
          size={30}
          style={[
            styles.icon,
            { backgroundColor: value === "user" ? "lightgray" : "" },
          ]}
          onPress={() => handleChange("user")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3, // Cần thêm dòng này cho Android
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    flex: 1,
  },
});

export default Navigation;
