import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Logo from './frontend/components/Logos';
import Inputs from './frontend/components/Inputs.js';
import Home from './frontend/pages/Home/index.js';

import * as Font from 'expo-font';

export default function App() {
  
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
