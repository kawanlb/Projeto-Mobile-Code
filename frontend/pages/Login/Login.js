import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import TextInput from '../../components/input';
import GradientText from '../../components/GradientText';
import LoginButton from '../../components/LoginButton';
import ForgotPassword from '../../components/ForgotPassword';

const Login = ({ navigateToSignUp }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSignUp = () => {
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Senha:', senha);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/Logo.jpeg')}
          style={styles.logo}
        />
        <GradientText style={styles.gradientText}>Amigo de quatro patas</GradientText>
      </View>
      <View style={styles.inputContainer}>
        <LoginButton navigateToSignUp={navigateToSignUp}></LoginButton>
        <TextInput
          placeholder="Nome de usuário ou email"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.inputSenha}
        />
        <ForgotPassword></ForgotPassword>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  inputContainer: {
    marginTop: 60,
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 25,
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 7
  },
  inputSenha: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 5,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#0BACFE',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5, 
    width:'75%',
    marginTop: 10,
    borderRadius: 7
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gradientText: {
    fontSize: 38,
    fontWeight: 'bold',
  }
});

export default Login;
