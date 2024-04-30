import React from "react";
import { StyleSheet, Text } from "react-native";

const ForgotPassword = ({ buttonText}) => {
  return (
    <>
      <div style={styles.container}>
        <Text style={styles.textLogin}>{buttonText}</Text>
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
