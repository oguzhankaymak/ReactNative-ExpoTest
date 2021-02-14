import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Layout from '../../components/layout/Layout';
import CartItemActions from '../../redux/CartItemRedux';
import styles from './styles/CartScreenStyle';

const CartScreen = () => {
  const cart = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();

  const _renderItem = (item) => (
    <TouchableOpacity onPress={() => dispatch(CartItemActions.RemoveFromCart(item))} style={styles.card}>
      <View>
        <Text style={styles.text}>Product: {item.name}</Text>
        <Text style={styles.text}>Unit Price: {item.price} $</Text>
        <Text style={styles.text}>Quantity: {item.quantity}</Text>
      </View>
      <MaterialCommunityIcons name="delete-outline" size={30} color="#fff" />
    </TouchableOpacity>
  );

  return (
    <Layout>
      <View style={styles.container}>
        <FlatList
          data={cart.cartItem}
          renderItem={({ item }) => _renderItem(item)}
          testID="cartList"
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </Layout>
  );
};

export default CartScreen;
