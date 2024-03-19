// components/TextInput.js
import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = ({ placeholder, style, ...rest }) => {
  return (
    <RNTextInput
      placeholder={placeholder}
      style={[styles.input, style]} // Aqui estamos mesclando os estilos definidos localmente com os estilos recebidos como props
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%', // define a largura para 100% do conteiner pai
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 10,
    fontSize: 16,
    maxWidth: 300, // largura máxima da caixa de texto
    borderRadius:10,
  },
});

export default TextInput;
