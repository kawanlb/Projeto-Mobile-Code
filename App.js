import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useState } from "react";
import Login from "./frontend/pages/Login/Login";
import TelaCadastro from "./frontend/pages/Cadastro/TelaCadastro";
import Home from "./frontend/pages/Home/";

export default function App() {
  // const [currentScreen, setCurrentScreen] = useState("Login");
  const Stack = createStackNavigator();

  const [fontsLoaded, fontError] = useFonts({
    "Ribeye-Regular": require("../Projeto-Mobile-Code/frontend/assets/fonts/Ribeye-Regular.ttf"),
    "Outfit-Medium": require("../Projeto-Mobile-Code/frontend/assets/fonts/Outfit-Medium.ttf"),
    "Roboto-Regular": require("../Projeto-Mobile-Code/frontend/assets/fonts/Roboto-Regular.ttf"),
    "Comfortaa-Regular": require("../Projeto-Mobile-Code/frontend/assets/fonts/Comfortaa-Regular.ttf"),
    "Actor": require("../Projeto-Mobile-Code/frontend/assets/fonts/Actor-Regular.ttf"),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    //Criação da navegação entre telas
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log in" component={Login}/>
        <Stack.Screen name="Sign up" component={TelaCadastro}/>
        <Stack.Screen name="Home" component={Home}  
        options={{
          headerLeft: () => null // Remove o botão de voltar
        }}/>
      </Stack.Navigator>
    
    </NavigationContainer>
    
    // <View style={styles.container} onLayout={onLayoutRootView}>
    //   {currentScreen === "Login" && (
    //     <Login navigateToSignup={navigateToSignup} />
    //   )}
    //   {currentScreen === "Signup" && <TelaCadastro />}
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  ribEyeRegular: {
    fontFamily: "Ribeye-Regular",
    fontSize: 20,
  },
  text: {
    fontSize: 38,
    fontWeight: "bold",
  },
});
