import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Layout from '../../components/layout/Layout';

import styles from './styles/styles';
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  const Item = ({ title, screen }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(screen)}>
      <AntDesign name="rightcircleo" size={24} color="#fff" />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
  return (
    <Layout>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.title}>Options List</Text>
        </View>
        <Item title={'Note List'} screen={'noteList'} />
        <Item title={'Electronics Products'} screen={'electronics'} />
      </View>
    </Layout>
  );
};

export default Home;
