// components/TextInput.js
import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = ({ placeholder, style, ...rest }) => {
  return (
    <RNTextInput
      placeholder={placeholder}
      style={[styles.input, style]} 
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%', 
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 10,
    fontSize: 16,
    maxWidth: 300,
    borderRadius:10,
  },
});

export default TextInput;