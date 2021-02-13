import React from "react";
import { useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const NavigationStack = createStackNavigator();

//screens
import Home from "../screens/home/Home";
import ElectronicsScreen from "../screens/electronicsScreen/ElectronicsScreen";
import CartScreen from "../screens/cartScreen/CartScreen";
import ShoppingCart from "../components/shoppingCard/ShoppingCart";

const Navigator = ({}) => {
  const cartItem = useSelector((state) => state.cartItem.cartItem);

  return (
    <NavigationContainer>
      <NavigationStack.Navigator
        screenOptions={({ navigation }) => ({
          headerTitle: "Example Test App",
          headerRight: () => (
            <ShoppingCart
              onPressBtn={() => navigation.navigate("cart")}
              value={cartItem.length}
            />
          ),
        })}
      >
        <NavigationStack.Screen name="home" component={Home} />
        <NavigationStack.Screen
          name="electronics"
          component={ElectronicsScreen}
          options={{ headerTitle: "Electronics" }}
        />
        <NavigationStack.Screen
          name="cart"
          component={CartScreen}
          options={{ headerTitle: "cart" }}
        />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
