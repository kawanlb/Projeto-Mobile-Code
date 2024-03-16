// components/TextInput.js
import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = ({ placeholder, ...rest }) => {
  return (
    <RNTextInput
      placeholder={placeholder}
      style={styles.input}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default TextInput;
 