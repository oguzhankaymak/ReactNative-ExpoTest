import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles/ProductStyle';

const Product = ({ products, onPressBtn }) => {
  return products.map((item, index) => {
    return (
      <TouchableOpacity onPress={() => onPressBtn(item)} key={String(index)} style={styles.card}>
        <Text>{item.name + ' - ' + item.price}</Text>
        <AntDesign name="pluscircleo" size={24} color="#fff" />
      </TouchableOpacity>
    );
  });
};

export default Product;
