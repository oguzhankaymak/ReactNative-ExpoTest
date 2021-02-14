import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles/AddItemStyle';

const AddItem = ({ addItem }) => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.item}>
      <TextInput style={styles.textInput} onChangeText={setValue} value={value} testID={'add-input'} />
      <TouchableOpacity
        style={styles.roundPlus}
        testID={'add-button'}
        onPress={() => {
          addItem({ id: (Math.random() * 1000000).toString(), value: value });
          setValue('');
        }}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;
