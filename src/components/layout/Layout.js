import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles/LayoutStyle';

const Layout = ({ children }) => {
  return <View style={styles.page}>{children}</View>;
};

export default Layout;
