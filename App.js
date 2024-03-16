import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TelaCadastro from './frontend/pages/Cadastro/TelaCadastro';


export default function App() {
  return (
    <View style={styles.container}>
      <TelaCadastro/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
