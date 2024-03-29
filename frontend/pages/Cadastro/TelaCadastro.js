import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import TextInput from '../../components/TextInput';
import { telaCadastroStyles as styles } from '../Cadastro/style';
import { validatePassword } from '../../utils/validatePassword'; // Importa a função de validação de senha
import { validateEmail } from '../../utils/validateEmail'; // Importa a função de validação de email

const TelaCadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSignUp = () => {
    // Verifica se o email é válido antes de prosseguir
    if (!validateEmail(email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    // Verifica se a senha é forte antes de prosseguir
    if (!validatePassword(senha)) {
      alert('Por favor, insira uma senha forte. A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.');
      return;
    }

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
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Crie Sua Conta</Text>

        <Text style={styles.label}>Usuário:</Text>
        <TextInput
          placeholder="johndoe"
          value={nome}
          onChangeText={setNome}
          style={[styles.input, { top: 184 }]}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          placeholder="inbox@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={[styles.input, { top: 268.1 }]}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          placeholder="***********"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={[styles.input, { top: 352.2 }]}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TelaCadastro;
