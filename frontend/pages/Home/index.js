import { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import BotaoFiltro from '../../components/BotaoFiltro';
import CardAnimal from '../../components/CardAnimal';
import FiltroSimbolo from '../../assets/img/filtro.png';

const Home = () => {
    const [selectedFilter, setSelectedFilter] = useState("Todos");

    const handleFilterSelection = (filter) => {
        setSelectedFilter(filter);
    };

    return (
        <View>
            <Text style={styles.titulo}>Categorias</Text>
            <ScrollView horizontal={true}>
                <BotaoFiltro title="Todos" isSelected={selectedFilter === "Todos"} onPress={() => handleFilterSelection("Todos")} />
                <BotaoFiltro title="Gatos" isSelected={selectedFilter === "Gatos"} onPress={() => handleFilterSelection("Gatos")} />
                <BotaoFiltro title="Cães" isSelected={selectedFilter === "Cães"} onPress={() => handleFilterSelection("Cães")} />
                <BotaoFiltro title="Aves" isSelected={selectedFilter === "Aves"} onPress={() => handleFilterSelection("Aves")} />
                <BotaoFiltro title="" img={FiltroSimbolo} isSelected={selectedFilter === "Simbolo"} onPress={() => handleFilterSelection("Simbolo")} />
            </ScrollView>
            <View style={styles.cardAnimaisContainer}>
                <CardAnimal nome="Teste" idade="2 anos" genero="M" img="https://w0.peakpx.com/wallpaper/974/215/HD-wallpaper-lindo-cachorro-coleira-bonito-cachorro-animal.jpg" />
                <CardAnimal nome="Teste" idade="2 anos" genero="F" img="https://w0.peakpx.com/wallpaper/974/215/HD-wallpaper-lindo-cachorro-coleira-bonito-cachorro-animal.jpg" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titulo: {
        marginLeft: 8,
        fontFamily: 'Comfortaa',
        fontSize: 25
    },
    cardAnimaisContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})

export default Home;
