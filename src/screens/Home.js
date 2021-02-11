import React, { useState } from "react";
import { View, Text } from "react-native";
import AddItem from "../components/item/AddItem";

const Home = () => {
  const [data, setdata] = useState([]);
  return (
    <View style={{ paddingTop: 40 }}>
      <AddItem addItem={(newData) => setdata([...data, newData])} />
    </View>
  );
};

export default Home;
