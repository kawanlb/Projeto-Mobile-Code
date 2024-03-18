import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GradientText = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.layer1]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontFamily: 'Ribeye-Regular',
    fontWeight: 'bold',
    textAlign:'center'
  },
  layer1: {
    color: '#26D9F1', // Start color
  },
});

export default GradientText;
