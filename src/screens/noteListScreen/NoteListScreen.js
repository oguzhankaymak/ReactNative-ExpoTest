import React, { useState } from 'react';
import { View, Text } from 'react-native';

import AddItem from '../../components/item/AddItem';
import ListItem from '../../components/item/ListItem';
import Layout from '../../components/layout/Layout';
import styles from './styles/NoteListScreenStyle';

const NoteListScreen = () => {
  const [data, setdata] = useState([]);
  return (
    <Layout>
      <View style={styles.container}>
        <AddItem addItem={(newData) => setdata([...data, newData])} />
        <ListItem data={data} removeData={(id) => setdata(data.filter((filterValue) => filterValue.id !== id))} />
      </View>
    </Layout>
  );
};

export default NoteListScreen;
