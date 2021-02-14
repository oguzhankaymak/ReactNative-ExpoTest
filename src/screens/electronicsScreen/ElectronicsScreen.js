import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import CartItemActions from '../../redux/CartItemRedux';
import { electronics } from '../../../Data';
import Product from '../../components/product/Product';
import Layout from '../../components/layout/Layout';
import styles from './styles/ElectronicsScreenStyle';

const ElectronicsScreen = () => {
  const dispatch = useDispatch();
  return (
    <Layout>
      <View style={styles.container}>
        <Product products={electronics} onPressBtn={(product) => dispatch(CartItemActions.AddToCart(product))} />
      </View>
    </Layout>
  );
};

export default ElectronicsScreen;
