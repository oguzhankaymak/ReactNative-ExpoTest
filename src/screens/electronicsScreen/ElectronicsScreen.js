import React from "react";
import { View } from "react-native";

import { electronics } from "../../../Data";
import Product from "../../components/product/Product";

const ElectronicsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Product products={electronics} />
    </View>
  );
};

export default ElectronicsScreen;
