import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

import CartItemActions from "../../redux/CartItemRedux";
import { electronics } from "../../../Data";
import Product from "../../components/product/Product";

const ElectronicsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      <Product
        products={electronics}
        onPressBtn={(product) => dispatch(CartItemActions.AddToCart(product))}
      />
    </View>
  );
};

export default ElectronicsScreen;
