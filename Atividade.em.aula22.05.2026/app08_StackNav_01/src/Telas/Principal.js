import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { estilos } from "../styleSheet/estilos";

import { useNavigation } from '@react-navigation/native';

function Principal() {
  const navigation = useNavigation();
  const img1 = {
    uri: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80'
  };
  let autor = "Jhonathan Lima De Souza";
  let data = "25/05/26";

  function acessaTela(Tela) {
    if (Tela == 'C') navigation.navigate('Carnaval');
    else if (Tela == 'J') navigation.navigate('FestaJunina');
    else if (Tela == 'H') navigation.navigate('Halloween');
  }

  return (
    <View style={estilos.Tela_Principal_fundo}>
      <View id="Principal_Cab" style={estilos.Tela_Principal_Cab}>
        <Text style={estilos.Tela_Principal_SubTitulo1}>Tela Principal</Text>
        <Text style={estilos.Tela_Principal_Titulo}>Stack Navigation</Text>
        <Text style={estilos.Tela_Principal_SubTitulo2}>DSV Mobile</Text>
        <Image source={img1} style={{ width: 200, height: 200 }} />
      </View>
      <View id="Principa_Corpo" style={estilos.Tela_Principal_Corpo}>
        <Text style={estilos.Tela_Principal_SubTitulo1}>Curiosidades</Text>
        <TouchableOpacity style={estilos.Tela_Principal_Botoes} onPress={() => acessaTela('C')}>
          <Text>Carnaval</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.Tela_Principal_Botoes} onPress={() => acessaTela('J')}>
          <Text>Festa Junina</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.Tela_Principal_Botoes} onPress={() => acessaTela('H')}>
          <Text>Halloween</Text>
        </TouchableOpacity>
      </View>
      <View id="Principal_Rodape" style={estilos.Tela_Principal_Rodape}>
        <Text>{autor}</Text>
        <Text>{data}</Text>
      </View>
    </View>
  );
}
export default Principal;
