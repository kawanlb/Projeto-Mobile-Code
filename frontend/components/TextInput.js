import React from 'react';
import { TextInput as RNTextInput, View } from 'react-native';
import { inputStyles } from '../pages/Cadastro/style'; // Importa os estilos do arquivo separado

const TextInput = ({ placeholder, style, ...rest }) => {
  return (
    <View style={inputStyles.inputContainer}>
      <RNTextInput
        placeholder={placeholder}
        placeholderTextColor={inputStyles.placeholderText.color} // Usa a cor definida no estilo para o placeholder
        style={inputStyles.input} // Usa os estilos importados para o input
        {...rest}
      />
    </View>
  );
};

export default TextInput;