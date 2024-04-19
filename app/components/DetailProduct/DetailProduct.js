import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import LocalMallIcon from "react-native-vector-icons/MaterialIcons";
import ArrowDownwardIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const DetailProduct = ({ route }) => {
  const { productID } = route.params;
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const apiUrl = `http://192.168.1.232:45455/api/Products/${productID}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Lỗi khi gọi API: ", error));
  }, [productID]);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const addToCart = () => {
    if (product) {
      const productToAdd = { ...product };
      setCart((prevCart) => [...prevCart, productToAdd]);
      setShowConfirmation(true);
    }
  };
  const goToCart = () => {
    navigation.navigate("Cart", { cart });
  };
  const closeModal = () => {
    setShowConfirmation(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topRightButtonContainer}>
        <TouchableOpacity style={styles.goToCartButton} onPress={goToCart}>
          <Text style={styles.goToCartButtonText}>Go to Cart</Text>
        </TouchableOpacity>
      </View>
      {product ? (
        <View style={styles.productInfo}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <Text style={styles.productName}>{product.productName}</Text>
          <Text style={styles.productPrice}>{product.price}đ</Text>
          <Text style={styles.productBrand}>{product.brand}</Text>
          <Text style={styles.productStock}>
            In Stock: {product.stockQuantity}
          </Text>
        </View>
      ) : (
        <Text>Loading product information...</Text>
      )}
      <View style={styles.ctn}>
        <Text style={styles.swipeText} onPress={addToCart}>
          Add to Cart
        </Text>

        <View style={styles.bar}>
          <LocalMallIcon name="local-mall" size={20} color="white" />
          <ArrowDownwardIcon
            name="keyboard-arrow-down"
            size={20}
            color="white"
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../Img/cart.png")} style={styles.img} />
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Modal transparent={true} visible={showConfirmation}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Sản phẩm đã được thêm vào giỏ hàng!
            </Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.modalCloseText}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  topRightButtonContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  goToCartButton: {
    backgroundColor: "lightgray",
    padding: 5,
    borderRadius: 10,
  },

  goToCartButtonText: {
    color: "black",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  img: {
    width: 300,
    height: 200,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  swipeText: {
    color: "black",
  },
  productInfo: {
    alignItems: "center",
    marginTop: 60,
  },
  productImage: {
    width: 300,
    height: 200,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  productPrice: {
    fontSize: 20,
    color: "green",
    marginTop: 10,
  },
  productBrand: {
    fontSize: 16,
    marginTop: 10,
  },
  productStock: {
    fontSize: 16,
    color: "blue",
    marginTop: 10,
  },
  bar: {
    backgroundColor: "black",
    height: 92,
    width: 42,
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  ctn: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    paddingTop: 80,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "lightgray",
    padding: 5,
    borderRadius: 10,
  },
  backButtonText: {
    color: "black",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalCloseText: {
    fontSize: 16,
    color: "blue",
    textAlign: "center",
  },
});

export default DetailProduct;
