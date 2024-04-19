import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const ListProduct = () => {
  const [product, setProduct] = useState([]);
  const navigation = useNavigation();

  const handleGetAllProducts = async () => {
    const url = "http://192.168.1.232:45455/api/Products";
    try {
      let response = await fetch(url, { method: "GET" });
      if (response.ok) {
        let responseJSON = await response.json();
        setProduct(responseJSON);
      } else {
        console.error("Lỗi: Yêu cầu mạng không thành công.");
      }
    } catch (error) {
      console.error("Lỗi: " + error.message);
    }
  };

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  const handleNext = (selectedProduct) => {
    // Truyền thông tin sản phẩm đã chọn sang trang DetailProduct
    navigation.navigate("DetailProduct", {
      productID: selectedProduct.productID,
    });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => handleNext(item)}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.price}>{item.price}đ</Text>
        <View style={styles.arrowIconContainer}>
          <Icon name="arrow-right" size={16} color="white" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <FlatList data={product} numColumns={2} renderItem={renderItem} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  container: {
    width: "100%",
    marginTop: 24,
  },
  item: {
    flex: 1,
    margin: 10,
    position: "relative",
    height: 220,
    width: 150,
    borderRadius: 18,
    backgroundColor: "#a9a9a9",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 100,
  },
  productName: {
    color: "#000",
    fontSize: 16,
  },
  price: {
    color: "#000",
    fontSize: 16,
  },
  arrowIconContainer: {
    position: "absolute",
    bottom: 8,
    right: 8,
    width: 20,
    height: 20,
    backgroundColor: "black",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListProduct;
