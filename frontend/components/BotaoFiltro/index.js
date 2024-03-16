import {Pressable, Text, StyleSheet} from 'react-native';

const BotaoFiltro=({title})=>{
    return(
        <Pressable style={styles.botao}>
            <Text style={styles.textoBotao}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    botao:{
        backgroundColor: '#F7F7F8',
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
        paddingVertical: 20,
        paddingHorizontal: 10,
        margin: 8,
        alignItems:'center'
    },
    textoBotao:{
        fontFamily: 'Actor',
        fontSize: 18
    }

});

export default BotaoFiltro;