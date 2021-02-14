import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Product = ({ products, onPressBtn }) => {
  return products.map((item, index) => {
    return (
      <TouchableOpacity
        onPress={() => onPressBtn(item)}
        key={String(index)}
        style={{
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text>{item.name + " - " + item.price}</Text>
      </TouchableOpacity>
    );
  });
};

export default Product;
