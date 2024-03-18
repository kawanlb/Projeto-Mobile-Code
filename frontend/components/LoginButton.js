import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LoginButton = () => {
  return (
    <>
      <div style={styles.containerr}>
        <Text style={styles.textLogin}>Login</Text>
        <Text>ou <a href="www.example.com">crie sua conta</a></Text>
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  containerr: {
    display:'flex',
    flexDirection: 'column',
    backgroundColor: "#fff",
    alignItems: 'start',
    justifyContent: "start",
    width: '100%'
  },
  textLogin:{
    fontSize:24,
    fontFamily:'Outfit-Medium'
  }
});

export default LoginButton;
