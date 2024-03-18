import { TextInput, View, StyleSheet } from "react-native";

const Inputs = function () {
  return (
    <View>
      <TextInput placeholder="Nome de usuario ou email:" />
      <TextInput placeholder="Senha:" secureTextEntry />
    </View>
  );
};
export default Inputs;
