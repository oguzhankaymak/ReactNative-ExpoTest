import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles/ProductStyle';

const Product = ({ products, onPressBtn }) => {
  return products.map((item, index) => {
    return (
      <TouchableOpacity
        onPress={() => onPressBtn(item)}
        key={String(index)}
        style={styles.card}
        testID={'product' + index}>
        <View>
          <Text style={styles.text}>Product: {item.name}</Text>
          <Text style={styles.text}>Unit Price: {item.price} $</Text>
        </View>
        <AntDesign name="pluscircleo" size={24} color="#fff" />
      </TouchableOpacity>
    );
  });
};

export default Product;
