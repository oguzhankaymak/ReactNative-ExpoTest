import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Icon from "@expo/vector-icons/Ionicons";

const ShoppingCart = ({ onPressBtn, value }) => {
  return (
    <TouchableOpacity style={{ padding: 5 }} onPress={onPressBtn}>
      <View
        style={{
          position: "absolute",
          width: 30,
          height: 30,
          borderRadius: 15,
          backgroundColor: "rgba(95,197,123,0.8)",
          right: 15,
          bottom: 15,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>2</Text>
      </View>
      <Icon name="ios-cart" size={30} />
    </TouchableOpacity>
  );
};

export default ShoppingCart;
