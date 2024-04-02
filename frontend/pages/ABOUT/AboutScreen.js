import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import GradientText from '../../components/GradientText'; 
import LoginButton from '../../components/LoginButton'; 
import { useNavigation } from '@react-navigation/native'; 

const AboutMeScreen = () => {
  const navigation = useNavigation(); 

  const handleSignup = () => {
    navigation.navigate('Sign up'); 
  };

  return (
    <View style={styles.container}>
      {/* Botão de login no canto superior direito */}
      <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/Logo.jpeg')}
          style={styles.logo}
        />
        <GradientText style={styles.gradientText}>Amigo de quatro patas</GradientText>
      </View>
      <View style={styles.contentContainer}>
        <GradientText style={[styles.title, styles.blueText]}>Sobre nós</GradientText>
        <Text style={styles.description}>
          <Text style={styles.descriptionTitle}>
          O Projeto com o objetivo de conscientizar sobre a posse responsável e controle populacional de animais de rua, amparando em situação de maus-tratos, risco de morte e abandono. É uma entidade não governamental, sem fins lucrativos, que visa tirar o maior número possível de animais das ruas, tratar de possíveis traumas e doenças e integrá-lo a famílias que estejam dispostas a dar muito amor e carinho. Amigos e voluntários dispostos a encontrar sempre o melhor lar e famílias para dar uma vida digna aos animais..</Text>   
        </Text>
      </View>
      <View style={styles.teamContainer}>
        <GradientText style={[styles.title, styles.blueText]}>Equipe:</GradientText>
        <Text style={styles.teamDescription}>
          Kawan Leandro 01616317 . 
          {'\n'}
          Matheus Emanuel 01615805. 
          {'\n'}
          Marcos Trummer. 
          {'\n'}
          Gabriel José 01618156. 
          {'\n'}
          Gabryela Thainá 01612684. 
          {'\n'}
          Letícia Pinheiro 01651848. 
          {'\n'}
          Alessandra Santos 01630775. 
          {'\n'}
          Victhor Emanuel 01615125.
          {'\n'}
          Wagner Vinicius 01615748.
          {'\n'}
          Eduardo Rafael 01602387.
          {'\n'}
          Luís Gabriel 01614692.
        </Text>   
        <p>Link Repositório: https://github.com/kawanlb/Projeto-Mobile-Code</p>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F4DCC9', 
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
  gradientText: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', 
    paddingHorizontal: 20,
    marginBottom: 20, 
  },
  teamContainer: {
    alignItems: 'flex-start', 
    marginTop: 20, 
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  blueText: {
  },
  description: {
    fontSize: 18,
    textAlign: 'left', 
    fontFamily: 'Comfortaa-Regular', 
    color: '#333333', 
  },
  descriptionTitle: {
    fontWeight: 'bold', 
  },
  teamDescription: {
    fontSize: 16, 
    marginTop: 10, 
    textAlign: 'left', 
  },
  // Estilos para o botão de login
  loginButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#0BACFE',
    padding: 10,
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AboutMeScreen
