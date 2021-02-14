import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import CartItemActions from "../../redux/CartItemRedux";

const CartScreen = () => {
  const cart = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();
  return cart.cartItem.map((item, index) => {
    return (
      <TouchableOpacity
        onPress={() => dispatch(CartItemActions.RemoveFromCart(item))}
        key={String(index)}
        style={{
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text>{item.name + " - " + item.price + " - " + item.quantity}</Text>
      </TouchableOpacity>
    );
  });
};

export default CartScreen;
