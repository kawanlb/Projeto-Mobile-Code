import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Logo from './frontend/components/Logos';
import Inputs from './frontend/components/Inputs.js';
import Home from './frontend/screens/Home';

import * as Font from 'expo-font';

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);

  // useEffect(() => {
  //   const loadFont = async () => {
  //     await Font.loadAsync({
  //       Comfortaa: require('@expo-google-fonts/comfortaa'),
  //       Roboto: require('@expo-google-fonts/roboto'),
  //       Actor: require('@expo-google-fonts/actor')
  //     });
  //     setFontLoaded(true);
  //   };
  
  //   loadFont();
  // }, []);
  
  return (
    <View style={styles.container}>
      <Home/>
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
