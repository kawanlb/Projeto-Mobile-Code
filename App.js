import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useState } from "react";
import Login from "./frontend/pages/Login/Login";
import TelaCadastro from "./frontend/pages/Cadastro/TelaCadastro";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Login");

  const [fontsLoaded, fontError] = useFonts({
    "Ribeye-Regular": require("../Projeto-Mobile-Code/frontend/assets/fonts/Ribeye-Regular.ttf"),
    "Outfit-Medium": require("../Projeto-Mobile-Code/frontend/assets/fonts/Outfit-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const navigateToSignUp = () => {
    setCurrentScreen("SignUp");
  };
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {currentScreen === "Login" && (
        <Login navigateToSignUp={navigateToSignUp} />
      )}
      {currentScreen === "SignUp" && <TelaCadastro />}
      <StatusBar style="auto" />
    </View>
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
