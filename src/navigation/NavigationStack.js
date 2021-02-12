import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const NavigationStack = createStackNavigator();

//screens
import Home from "../screens/home/Home";
import ElectronicsScreen from "../screens/electronicsScreen/ElectronicsScreen";

const Navigator = ({}) => {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator
        screenOptions={({ navigation }) => ({
          headerTitle: "Example Test App",
        })}
      >
        <NavigationStack.Screen name="home" component={Home} />
        <NavigationStack.Screen
          name="electronics"
          component={ElectronicsScreen}
          options={{ headerTitle: "Electronics" }}
        />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
