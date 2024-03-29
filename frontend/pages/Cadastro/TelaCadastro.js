import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import TextInput from '../../components/TextInput';
import { telaCadastroStyles as styles } from '../Cadastro/style';
import { validatePassword } from '../../utils/validatePassword'; 
import { validateEmail } from '../../utils/validateEmail'; 
import { useNavigation } from '@react-navigation/native';

const TelaCadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const handleSignup = () => {
    if (!validateEmail(email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    if (!validatePassword(senha)) {
      alert('Por favor, insira uma senha forte.');
      return;
    }

    navigation.navigate('Home');
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
          style={styles.input}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          placeholder="inbox@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />

        <View style={styles.passwordContainer}>
          <Text style={styles.label}>Senha:</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              placeholder="***********"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!showPassword}
              style={[styles.input, styles.passwordInput]}
            />
            <TouchableOpacity
              style={styles.eyeIconContainer} // Adicionando estilo para o contêiner do ícone do olho
              onPress={() => setShowPassword(!showPassword)}
            >
              <Image
                source={showPassword ? require('../../assets/images/eyeOff.png') : require('../../assets/images/eyeOn.png')}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSignup}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TelaCadastro;
