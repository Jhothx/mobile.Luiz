import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { estilos } from '../styleSheet/estilos';
import paises from '../dados/paises.json';

export default function Conteudo() {
  function recuperaId(item) {
    return item.id;
  }

  function mostrarItem({ item }) {
    return (
      <View style={estilos.card}>
        <Text style={estilos.pais}>{item.pais}</Text>
        <Text style={estilos.capital}>Capital: {item.capital}</Text>
      </View>
    );
  }

  function mostrarSeparador() {
    return (
      <View style={estilos.separador} />
    );
  }

  function mostrarCabecalho() {
    return (
      <Text style={estilos.cabecalhoLista}>Países</Text>
    );
  }

  return (
    <FlatList
      data={paises}
      keyExtractor={recuperaId}
      renderItem={mostrarItem}
      ItemSeparatorComponent={mostrarSeparador}
      ListHeaderComponent={mostrarCabecalho}
    />
  );
}
