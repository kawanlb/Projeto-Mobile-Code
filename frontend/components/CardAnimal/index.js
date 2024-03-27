import {Text, View, StyleSheet, Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';




const CardAnimal=({nome, idade, genero, img})=>{
    // Função para obter o ícone do gênero
    const getGeneroIcon = () => {
      if (genero === 'F' || genero === 0) {
          return <Icon name="venus" size={21} color="pink" />; // Ícone feminino
      } else if (genero === 'M' || genero === 1) {
          return <Icon name="mars" size={20} color="#FCA93F"  />; // Ícone masculino
      } else {
          return null; // Retorna nulo se o gênero não for especificado
      }
    };
    return(
        <View style={styles.container}>
            <Image
            style={styles.card}
            source={{ uri: img }}
            />
            <LinearGradient
            style={styles.textoContainer1}
            colors={['transparent', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
            start={[0, 0]}
            end={[0, 1]}
            >
              <View style={styles.textoContainer2}>
                <Text style={styles.nome}>{nome}</Text>
                <View>{getGeneroIcon()}</View>
              </View>
              
              <Text style={styles.idade}>{idade}</Text>
            </LinearGradient>
        
           
    
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      borderRadius: '20%',
      marginVertical: '20px',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
    },
    card: {
      flex:'1',
      width: '11em',
      height: '12em',
      borderRadius: '20%'
    },
    textoContainer1:{
        position:'absolute',
        left:0,
        borderRadius: '20%',
        width:'11em',
        height:'12em',
        justifyContent:'flex-end',
        paddingHorizontal:'20px',
        paddingVertical: '15px',
        bottom: 0,
        
    },
    textoContainer2:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    nome: {
      fontSize: '20px',
      fontWeight: "bold",
      color: 'white',
      marginRight: 5,
    },
    idade: {
      fontSize: '10px',
      color: "white",
    },

  });
  
export default CardAnimal;