import { TextInput, View, Button, StyleSheet, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const BarraPesquisa = ()=>{

    return(
        <View style={styles.barraDePesquisa}>
        <Pressable>
        <Icon name="search" size={20} color="#5BA9EF"/>
        </Pressable>
        
        <TextInput style={styles.input} placeholder="Buscar animal..." />
        </View>
    );
};
const styles = StyleSheet.create({
barraDePesquisa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F7F8',
    padding: 7,
    borderRadius: 30,
    margin: 10,
  },
  input: {
    color: '#6F6F6F',
    flex: 1,
    padding: 8,
    borderRadius: 20,
    marginRight: 10,
    fontSize: 17,
    fontFamily: 'Outfit-Medium',
  },
});

export default BarraPesquisa;