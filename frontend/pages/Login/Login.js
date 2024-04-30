import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import TextInput from '../../components/LoginInput';
import GradientText from '../../components/GradientText';
import LoginButton from '../../components/LoginButton';
import ForgotPassword from '../../components/ForgotPassword';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import i18n from '../../locales';


const Login = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();
  
  const handleSignin = () => {
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Senha:', senha);
    navigation.navigate('Home');
  };

  const { t } = useTranslation();

  useEffect(() => {
    // Set the initial language based on device locale
    const locale = RNLocalize.getLocales()[0].languageCode;
    i18n.changeLanguage(locale);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/Logo.jpeg')}
          style={styles.logo}
        />
        <GradientText style={styles.gradientText}>{t('logo')}</GradientText>
      </View>
      <View style={styles.inputContainer}>
        <LoginButton text={t('signup')} title={t('login')} or={t('or')}></LoginButton>
        <TextInput
          placeholder={t('emailPlaceHolder')}
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          placeholder={t('passwordPlaceHolder')}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.inputSenha}
        />
        <ForgotPassword buttonText={t('forgotPassword')}></ForgotPassword>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignin}
        >
          <Text style={styles.buttonText}>{t('login')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
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