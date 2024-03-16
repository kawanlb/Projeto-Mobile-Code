// screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import TextInput from './input';

const TelaCadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implementação do código para processar o cadastro
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Senha:', password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default TelaCadastro;
