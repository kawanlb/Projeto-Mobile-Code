import { Text, Pressable, StyleSheet, Image } from 'react-native';

const BotaoFiltro = ({ title, img, isSelected, onPress }) => {
    return (
        <Pressable
            style={[styles.botao, isSelected && styles.botaoSelecionado]}
            onPress={onPress}
        >
            <Text style={[styles.textoBotao, isSelected && styles.textoBotaoSelecionado]}>{title}</Text>
            {img && <Image style={styles.imagemBotao} source={img} />}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#F7F7F8',
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        height: 63,
        width: 63,
        margin: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoSelecionado: {
        backgroundColor: '#0BACFE'
    },
    textoBotao: {
        fontFamily: 'Actor',
        fontSize: 18
    },
    textoBotaoSelecionado: {
        color: 'white'
    },
    imagemBotao: {
        marginTop: 5,
        width: 28,
        height: 28,
    }
});

export default BotaoFiltro;
