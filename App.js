import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './frontend/components/Logos';
import Inputs from './frontend/components/Inputs.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Inputs/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
