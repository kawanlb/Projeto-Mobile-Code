import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ForgotPassword = () => {
  return (
    <>
      <div style={styles.container}>
        <Text style={styles.textLogin}>Esqueceu a senha?</Text>
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection: 'column',
    backgroundColor: "#fff",
    alignItems: 'flex-end',
    justifyContent: "start",
    width: '75%',
  },
  textLogin:{
    fontSize:16,
    fontFamily:'Outfit-Medium',
    color: 'grey'
  }
});

export default ForgotPassword;
