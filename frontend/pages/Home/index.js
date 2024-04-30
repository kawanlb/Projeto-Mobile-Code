import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import BotaoFiltro from '../../components/BotaoFiltro';
import CardAnimal from '../../components/CardAnimal';
import GaleriaDeImagens from '../../components/GaleriaDeImagens';
import BarraPesquisa from '../../components/BarraPesquisa';

import FiltroSimbolo from '../../assets/images/filtro.png';
import { useTranslation } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import i18n from '../../locales';

const Home = () => {
    const [pets, setPets] = useState([]);
    
    const handleFilterSelection = (filter) => {
        setSelectedFilter(filter);
    };
    
    const { t } = useTranslation();
    const [selectedFilter, setSelectedFilter] = useState(t('all'));
    
    useEffect(() => {
        const locale = RNLocalize.getLocales()[0].languageCode;
        i18n.changeLanguage(locale);
        fetchPetsData();
    }, []);

    const fetchPetsData = () => {
        const petsData = [
            { nome: "Lupy", idade: 2, genero: "M", img: "https://w0.peakpx.com/wallpaper/974/215/HD-wallpaper-lindo-cachorro-coleira-bonito-cachorro-animal.jpg", tipo: t('dogs') },
            { nome: "Puppy", idade: 1, genero: "F", img: "https://media.istockphoto.com/id/1443562748/pt/foto/cute-ginger-cat.jpg?s=1024x1024&w=is&k=20&c=eSoNQKuJDqJwujyj3vumgVfhunPlrJo0A-bZPjOQzqI=", tipo: t('cats') },
            { nome: "Docinho", idade: 5, genero: "F", img: "https://media.istockphoto.com/id/926144358/pt/foto/portrait-of-a-little-bird-tit-flying-wide-spread-wings-and-flushing-feathers-on-white-isolated.jpg?s=1024x1024&w=is&k=20&c=RFurWggvmUzuWCv0zu05wNGaJm1hGqqr_fBvAJgaza0=", tipo: t('birds') }
        ];
        setPets(petsData);
    };
    const filteredPets = selectedFilter === t('all') ? pets : pets.filter(pet => pet.tipo === selectedFilter);

    const renderPetsCards = () => {
        return filteredPets.map((pet, index) => (
            <CardAnimal
                key={index}
                nome={pet.nome}
                idade={`${pet.idade} ${pet.idade === 1 ? t('year') : t('years')}`}
                genero={pet.genero}
                img={pet.img}
            />
        ));
    };

    return (
        <View style={styles.container}>
            <View>
                <GaleriaDeImagens />
                <BarraPesquisa text={t('searchBarText')} />
            </View>
            <Text style={styles.titulo}>{t('categories')}</Text>
            <ScrollView horizontal={true}>
                <BotaoFiltro title={t('all')} isSelected={selectedFilter === t('all')} onPress={() => handleFilterSelection(t('all'))} />
                <BotaoFiltro title={t('cats')} isSelected={selectedFilter === t('cats')} onPress={() => handleFilterSelection(t('cats'))} />
                <BotaoFiltro title={t('dogs')} isSelected={selectedFilter === t('dogs')} onPress={() => handleFilterSelection(t('dogs'))} />
                <BotaoFiltro title={t('birds')} isSelected={selectedFilter === t('birds')} onPress={() => handleFilterSelection(t('birds'))} />
                <BotaoFiltro title="" img={FiltroSimbolo} isSelected={selectedFilter === "Simbolo"} onPress={() => handleFilterSelection("Simbolo")} />
            </ScrollView>

            <View style={styles.cardAnimaisContainer}>
                {renderPetsCards()}
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
        flexWrap: 'wrap',
    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFF',
    },
})

export default Home;
