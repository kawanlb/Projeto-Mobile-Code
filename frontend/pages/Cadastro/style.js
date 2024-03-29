import { StyleSheet } from 'react-native';

export const telaCadastroStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontFamily: 'Outfit-Medium',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 30,
    color: '#000000',
    marginBottom: 30,
  },
  logo: {
    width: 170,
    height: 170,
    borderRadius: 185,
  },
  inputContainer: {
    marginTop: 60,
    width: '80%', // Alterado para ocupar 80% da largura da tela
    paddingHorizontal: 20, // Adiciona padding horizontal para espaçamento
    maxWidth: 300,
  },
  label: {
    fontFamily: 'Outfit-Medium',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: '#A2A2A2', 
    marginBottom: 5,
  },
  button: {
    height: 55,
    backgroundColor: '#0BACFE',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginTop: 20, // Ajustado o espaçamento entre o input e o botão
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },

  eyeIcon:{
    width: 20,
    height: 20,
    left: 230, // Ajuste este valor conforme necessário para alinhar à direita
    position: 'relative',
    bottom: 38,
  }
});

export const inputStyles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#A2A2A2', 
    marginBottom: 10, // Alterado para ajustar o espaçamento entre os inputs
    paddingHorizontal: 10,
    fontSize: 16,
    maxWidth: 300,
    borderRadius: 10,
    color: '#000000',
  },
  placeholderText: { 
    color: '#A2A2A2', 
  },
});
