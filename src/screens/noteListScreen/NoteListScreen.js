import React, { useState } from "react";
import { View, Text } from "react-native";

import AddItem from "../../components/item/AddItem";
import ListItem from "../../components/item/ListItem";

const NoteListScreen = () => {
  const [data, setdata] = useState([]);
  return (
    <View>
      <AddItem addItem={(newData) => setdata([...data, newData])} />
      <ListItem
        data={data}
        removeData={(id) =>
          setdata(data.filter((filterValue) => filterValue.id !== id))
        }
      />
    </View>
  );
};

export default NoteListScreen;
