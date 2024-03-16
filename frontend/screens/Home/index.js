import {Text, View, ScrollView, StyleSheet} from 'react-native'
import BotaoFiltro from '../../components/BotaoFiltro';

const Home=()=>{
    return(
        <View>
            <Text style={styles.titulo}>Categorias</Text>
            <ScrollView horizontal={true}>
                <BotaoFiltro title="Todos"/>
                <BotaoFiltro title="Gatos"/>
                <BotaoFiltro title="Cães"/>
                <BotaoFiltro title="Aves"/>
                <BotaoFiltro title=""/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    titulo:{
        fontFamily: 'Comfortaa',
        fontSize: 25
    }
})
export default Home;