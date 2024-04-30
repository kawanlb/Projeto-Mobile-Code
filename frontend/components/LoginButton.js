import React from "react";
import { Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-web";

const LoginButton = ({title, text, or }) => {
  
  const navigation = useNavigation();

  const handleSignup = () => {
    // Navegue para a tela de cadastro de name "Signup"
    navigation.navigate('Sign up');
  };

  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.textLogin}>{title}</Text>
        <Text>{or} <Text style={styles.linkCreateAccount} onPress={handleSignup}>{text}</Text></Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection: 'column',
    backgroundColor: "#fff",
    alignItems: 'start',
    justifyContent: "start",
    width: '75%',
    marginBottom: 10
  },
  textLogin:{
    fontSize:24,
    fontFamily:'Outfit-Medium'
  },
  linkCreateAccount:{
    color: '#53ACFF'
  }
});

export default LoginButton;
