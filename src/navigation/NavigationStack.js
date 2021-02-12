import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const NavigationStack = createStackNavigator();

//screens
import Home from "../screens/home/Home";
import ElectronicsScreen from "../screens/electronicsScreen/ElectronicsScreen";
import CartScreen from "../screens/cartScreen/CartScreen";
import ShoppingCart from "../components/shoppingCard/ShoppingCart";

const Navigator = ({}) => {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator
        screenOptions={({ navigation }) => ({
          headerTitle: "Example Test App",
          headerRight: () => (
            <ShoppingCart onPressBtn={() => navigation.navigate("cart")} />
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
