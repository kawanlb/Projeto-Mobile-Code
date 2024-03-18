import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './frontend/components/Logos';
import Inputs from './frontend/components/Inputs.js';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import GradientText from './frontend/components/GradientText';
import LoginButton from './frontend/components/LoginButton';



export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Ribeye-Regular': require('../Projeto-Mobile-Code/frontend/assets/fonts/Ribeye-Regular.ttf'),
    'Outfit-Medium': require('../Projeto-Mobile-Code/frontend/assets/fonts/Outfit-Medium.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Logo/>
      <GradientText style={styles.text}>Amigo de quatro patas</GradientText>
      <LoginButton></LoginButton>
      <Inputs/>
      <StatusBar style="auto" />
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
  ribEyeRegular:{
    fontFamily:'Ribeye-Regular',
    fontSize:20
  },
  text: {
    fontSize: 38,
    fontWeight: 'bold',
  }
}); 
