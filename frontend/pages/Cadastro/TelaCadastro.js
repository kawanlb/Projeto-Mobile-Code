import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import TextInput from '../../components/TextInput';
import { telaCadastroStyles as styles } from '../Cadastro/style';
import { validatePassword } from '../../utils/validatePassword'; 
import { validateEmail } from '../../utils/validateEmail'; 
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import i18n from '../../locales';

const TelaCadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const locale = RNLocalize.getLocales()[0].languageCode;
    i18n.changeLanguage(locale);
  }, []);

  const navigation = useNavigation();

  const handleSignup = () => {
    if (!validateEmail(email)) {
      alert(t('alertInvalidEmail'));
      return;
    }

    if (!validatePassword(senha)) {
      alert(t('alertInvalidPassword'));
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
        <Text style={styles.title}>{t('SignUp')}</Text>

        <Text style={styles.label}>{t('userPlaceHolder')}</Text>
        <TextInput
          placeholder="johndoe"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />

        <Text style={styles.label}>{t('emailPlaceHolder')}</Text>
        <TextInput
          placeholder="inbox@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />

        <View style={styles.passwordContainer}>
          <Text style={styles.label}>{t('passwordPlaceHolder')}</Text>
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
          <Text style={styles.buttonText}>{t('registerButtonLabel')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TelaCadastro;
