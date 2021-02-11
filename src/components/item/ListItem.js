import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./styles/ListItemStyle";

const ListItem = ({ data, removeData }) => {
  const _renderItem = (listData) => (
    <View style={styles.item}>
      <Text style={styles.title}>{listData.value}</Text>
      <TouchableOpacity
        style={styles.roundClose}
        onPress={() => removeData(listData.id)}
        testID={"delete"}
      >
        <Text style={styles.close}>x</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => _renderItem(item)}
      testID="list"
      keyExtractor={(item, index) => String(index)}
    />
  );
};

export default ListItem;
