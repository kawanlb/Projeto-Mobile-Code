import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import i18n from "./frontend/locales";
import TelaCadastro from "./frontend/pages/Cadastro/TelaCadastro";
import Home from "./frontend/pages/Home/";
import Login from "./frontend/pages/Login/Login";


export default function App() {
 
  const Stack = createStackNavigator();
  const { t } = useTranslation();

  useEffect(() => {
    // Set the initial language based on device locale
    const locale = RNLocalize.getLocales()[0].languageCode;
    i18n.changeLanguage(locale);
  }, []);

  const [fontsLoaded, fontError] = useFonts({
    "Ribeye-Regular": require("../Projeto-Mobile-Code/frontend/assets/fonts/Ribeye-Regular.ttf"),
    "Outfit-Medium": require("../Projeto-Mobile-Code/frontend/assets/fonts/Outfit-Medium.ttf"),
    "Roboto-Regular": require("../Projeto-Mobile-Code/frontend/assets/fonts/Roboto-Regular.ttf"),
    "Comfortaa-Regular": require("../Projeto-Mobile-Code/frontend/assets/fonts/Comfortaa-Regular.ttf"),
    "Actor": require("../Projeto-Mobile-Code/frontend/assets/fonts/Actor-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    //Criação da navegação entre telas
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={t('login')} component={Login}/>
        <Stack.Screen name="Sign up" component={TelaCadastro}/>
        <Stack.Screen name="Home" component={Home}  
        options={{
          headerLeft: () => null // Remove o botão de voltar
        }}/>
      </Stack.Navigator>
    
    </NavigationContainer>
    
  );
}