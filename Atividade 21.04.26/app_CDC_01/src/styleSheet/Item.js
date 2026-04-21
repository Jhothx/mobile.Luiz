import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './estilo';

function Item(props) {
  let nomePais = props.nomePais;
  let corFundo = props.corFundo;
  let corFonte = props.corFonte;
  let bandeira = props.bandeira;
  let habitantes = props.habitantes;
  let pib = props.pib;

  return (
    <View style={[estilos.item, { backgroundColor: corFundo }]}> 
      <View style={estilos.itemHeader}>
        <Image source={{ uri: bandeira }} style={estilos.itemImagem} />
        <Text style={[estilos.itemTexto, { color: corFonte }]}> {nomePais} </Text>
      </View>
      <Text style={[estilos.itemSubTexto, { color: corFonte }]}>Habitantes: {habitantes}</Text>
      <Text style={[estilos.itemSubTexto, { color: corFonte }]}>PIB: {pib}</Text>
    </View>
  );
}

export default Item;