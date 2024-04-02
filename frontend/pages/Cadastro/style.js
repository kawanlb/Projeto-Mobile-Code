import { StyleSheet } from 'react-native';

export const inputStyles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#A2A2A2', 
    marginBottom: 30,
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

export const telaCadastroStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FDF7E4',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontFamily: 'Outfit',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 30,
    color: '#000000',
    marginBottom: 50,
  },
  logo: {
    width: 170,
    height: 170,
    borderRadius: 185,
  },
  inputContainer: {
    marginTop: 60,
    width: 300,
    position: 'relative',
  },
  label: {
    fontFamily: 'Outfit',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: '#A2A2A2', 
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#0BACFE',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});