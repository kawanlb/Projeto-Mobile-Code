import { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import BotaoFiltro from '../../components/BotaoFiltro';
import CardAnimal from '../../components/CardAnimal';
import GaleriaDeImagens from '../../components/GaleriaDeImagens';
import BarraPesquisa from '../../components/BarraPesquisa';

import FiltroSimbolo from '../../assets/images/filtro.png';

const Home = () => {
    const [selectedFilter, setSelectedFilter] = useState("Todos");

    const handleFilterSelection = (filter) => {
        setSelectedFilter(filter);
    };

    return (
        <View style={styles.container}>
            <View>
                <GaleriaDeImagens/>
                <BarraPesquisa/>
            </View>
            <Text style={styles.titulo}>Categorias</Text>
            <ScrollView horizontal={true}>
                <BotaoFiltro title="Todos" isSelected={selectedFilter === "Todos"} onPress={() => handleFilterSelection("Todos")} />
                <BotaoFiltro title="Gatos" isSelected={selectedFilter === "Gatos"} onPress={() => handleFilterSelection("Gatos")} />
                <BotaoFiltro title="Cães" isSelected={selectedFilter === "Cães"} onPress={() => handleFilterSelection("Cães")} />
                <BotaoFiltro title="Aves" isSelected={selectedFilter === "Aves"} onPress={() => handleFilterSelection("Aves")} />
                <BotaoFiltro title="" img={FiltroSimbolo} isSelected={selectedFilter === "Simbolo"} onPress={() => handleFilterSelection("Simbolo")} />
            </ScrollView>
        
                <View style={styles.cardAnimaisContainer}>
                    <CardAnimal nome="Lupy" idade="2 anos" genero="M" img="https://w0.peakpx.com/wallpaper/974/215/HD-wallpaper-lindo-cachorro-coleira-bonito-cachorro-animal.jpg" />
                    <CardAnimal nome="Puppy" idade="1 ano" genero="F" img="https://w0.peakpx.com/wallpaper/974/215/HD-wallpaper-lindo-cachorro-coleira-bonito-cachorro-animal.jpg" />
                    <CardAnimal nome="Docinho" idade="5 anos" genero="F" img="https://w0.peakpx.com/wallpaper/974/215/HD-wallpaper-lindo-cachorro-coleira-bonito-cachorro-animal.jpg" />
                    
                </View>
        
            
        </View>
    )
}

const styles = StyleSheet.create({
    titulo: {
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 5,
        fontSize: 25,
        fontFamily: 'Comfortaa-Regular',
    },
    cardAnimaisContainer: {
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap', // Permite que os itens quebrem para a próxima linha
 
        
    },
    container:{
        height: '100%',
        width: '100%',
        backgroundColor:'#FFFF',
    },
})

export default Home;
