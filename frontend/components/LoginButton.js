import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-web";

const LoginButton = ({ navigateToSignUp }) => {

  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.textLogin}>Login</Text>
        <Text>ou <Text style={styles.linkCreateAccount} onClick={navigateToSignUp}>crie sua conta</Text></Text>
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
