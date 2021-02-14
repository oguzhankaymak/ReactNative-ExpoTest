import React from "react";
import { useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const NavigationStack = createStackNavigator();

//screens
import Home from "../screens/home/Home";
import ElectronicsScreen from "../screens/electronicsScreen/ElectronicsScreen";
import CartScreen from "../screens/cartScreen/CartScreen";
import NoteListScreen from "../screens/noteListScreen/NoteListScreen";
import ShoppingCart from "../components/shoppingCard/ShoppingCart";

const Navigator = ({}) => {
  const cartItem = useSelector((state) => state.cartItem.cartItem);

  const sumProductCountInBasket = () => {
    var total = 0;
    cartItem.forEach((product) => {
      total += product.quantity;
    });
    return total;
  };

  return (
    <NavigationContainer>
      <NavigationStack.Navigator
        screenOptions={({ navigation }) => ({
          headerTitle: "Example Test App",
          headerRight: () => (
            <ShoppingCart
              onPressBtn={() => navigation.navigate("cart")}
              value={sumProductCountInBasket()}
            />
          ),
        })}
      >
        <NavigationStack.Screen name="home" component={Home} />
        <NavigationStack.Screen
          name="noteList"
          component={NoteListScreen}
          options={{ headerTitle: "Note List" }}
        />
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
