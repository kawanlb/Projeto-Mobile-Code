import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, Dimensions, StyleSheet } from 'react-native';
import BarraPesquisa from '../../components/BarraPesquisa';

const GaleriaDeImagens = () => {
    const [startX, setStartX] = useState(0);
    const [ultimaPosicao, setUltimaPosicao] = useState(0);
    const [indiceAtual, setIndiceAtual] = useState(0);
    const larguraDaTela = '50%';
  
    const imagens = [
      { backgroundColor: '#ff6b6b' },
      { backgroundColor: '#ffb86c' },
      { backgroundColor: '#8ac926' },
      { backgroundColor: '#1982c4' },
      { backgroundColor: '#6a4c93' },
    ];
  
    const touchStart = (e) => {
      setStartX(e.nativeEvent.touches[0].pageX);
      setUltimaPosicao(e.nativeEvent.touches[0].pageX);
    };
  
    const touchMove = (e) => {
      const diferenca = e.nativeEvent.touches[0].pageX - startX;
      const novaPosicao = ultimaPosicao + diferenca;
      
      setUltimaPosicao(novaPosicao);
    };
  
    const touchEnd = (e) => {
      const distanciaPercorrida = ultimaPosicao - startX;
      if (distanciaPercorrida > 50) {
        mostrarImagem(indiceAtual - 1);
      } else if (distanciaPercorrida < -50) {
        mostrarImagem(indiceAtual + 1);
      } else {
        mostrarImagem(indiceAtual);
      }
      if (indiceAtual === 0 && distanciaPercorrida < -50) {
        mostrarImagem(imagens.length - 1);
      }
    };
  
    const mostrarImagem = (indice) => {
      
      setIndiceAtual(indice);
    };
  
    return (
      <View>
        <ScrollView
          horizontal
          style={styles.galeriaDeImagens}
          contentContainerStyle={{ width: imagens.length * larguraDaTela }}
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          onTouchEnd={touchEnd}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
        >
          {imagens.map((imagem, index) => (
            <View key={index} style={[styles.imagem, { backgroundColor: imagem.backgroundColor, width: '700%' }]} />
          ))}
        </ScrollView>
      </View>
    );
    
  };
  const styles = StyleSheet.create({
    galeriaDeImagens: {
      marginVertical: 5,
    },
    imagem: {
      height: 180,
      borderRadius: 10,
      marginRight: 10,
    },

  });
  
  export default GaleriaDeImagens;