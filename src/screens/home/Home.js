import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles/styles";
import AddItem from "../../components/item/AddItem";
import ListItem from "../../components/item/ListItem";

const Home = ({ navigation }) => {
  const [data, setdata] = useState([]);
  return (
    <View style={styles.container}>
      <AddItem addItem={(newData) => setdata([...data, newData])} />
      <ListItem
        data={data}
        removeData={(id) =>
          setdata(data.filter((filterValue) => filterValue.id !== id))
        }
      />
      <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.navigate("electronics")}>
          <Text style={styles.text}>Electronics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
