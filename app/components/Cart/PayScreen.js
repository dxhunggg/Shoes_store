import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

const PayScreen = ({ navigation }) => {
  const [recipientName, setRecipientName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleConfirmOrder = () => {
    setShowConfirmation(true);
  };

  const closeModal = () => {
    setShowConfirmation(false);
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập thông tin người nhận hàng</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên người nhận"
        value={recipientName}
        onChangeText={setRecipientName}
      />
      <TextInput
        style={styles.input}
        placeholder="Địa chỉ giao hàng"
        value={shippingAddress}
        onChangeText={setShippingAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Text style={styles.paymentLabel}>Hình thức thanh toán:</Text>
      <View style={styles.paymentOptions}>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            paymentMethod === "cash" && styles.selectedOption,
          ]}
          onPress={() => handlePaymentMethodChange("cash")}
        >
          <Text>Tiền mặt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            paymentMethod === "banking" && styles.selectedOption,
          ]}
          onPress={() => handlePaymentMethodChange("banking")}
        >
          <Text>Banking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            paymentMethod === "other" && styles.selectedOption,
          ]}
          onPress={() => handlePaymentMethodChange("other")}
        >
          <Text>Khác</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirmOrder}
      >
        <Text style={styles.confirmButtonText}>Xác nhận đơn hàng</Text>
      </TouchableOpacity>
      <Modal transparent={true} visible={showConfirmation}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Đơn hàng đã được chuyển thành công!
            </Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.modalCloseText}>Trở về trang chủ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 16,
    borderRadius: 5,
  },
  paymentLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  paymentOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  paymentOption: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: "blue",
  },
  confirmButton: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: "white",
    textAlign: "center",
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

export default PayScreen;
