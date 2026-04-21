import React from "react";
import { ScrollView } from 'react-native';
import { estilos } from "./estilo";
import Item from "./Item";

function Conteudo() {

  let ArrayPaises = [
    "Brasil", "China", "Japão", "Portugal", "Itália",
    "Alemanha", "Egito", "Síria", "Africa do Sul", "Paquistão"
  ];

  let ArrayCoresFundo = [
    "blue", "yellow", "green", "blue", "darkred",
    "gray", "blue", "yellow", "green", "black"
  ];

  let ArrayCoresFonte = [
    "white", "black", "yellow", "black", "yellow",
    "green", "white", "green", "yellow", "darkred"
  ];

  let ArrayBandeiras = [
    "https://flagcdn.com/w320/br.png",
    "https://flagcdn.com/w320/cn.png",
    "https://flagcdn.com/w320/jp.png",
    "https://flagcdn.com/w320/pt.png",
    "https://flagcdn.com/w320/it.png",
    "https://flagcdn.com/w320/de.png",
    "https://flagcdn.com/w320/eg.png",
    "https://flagcdn.com/w320/sy.png",
    "https://flagcdn.com/w320/za.png",
    "https://flagcdn.com/w320/pk.png"
  ];

  let ArrayHabitantes = [
    "214 milhões", "1,4 bilhões", "125 milhões", "10,3 milhões", "60 milhões",
    "83 milhões", "108 milhões", "18 milhões", "60 milhões", "230 milhões"
  ];

  let ArrayPIB = [
    "1,6 tri", "17,7 tri", "4,9 tri", "0,3 tri", "2,1 tri",
    "4,0 tri", "0,4 tri", "0,1 tri", "0,3 tri", "0,4 tri"
  ];

  let itemConteudo = ArrayPaises.map((pais, i) => (
    <Item
      key={pais}
      nomePais={pais}
      corFundo={ArrayCoresFundo[i]}
      corFonte={ArrayCoresFonte[i]}
      bandeira={ArrayBandeiras[i]}
      habitantes={ArrayHabitantes[i]}
      pib={ArrayPIB[i]}
    />
  ));

  return (
    <ScrollView style={estilos.conteudo}>
      {itemConteudo}
    </ScrollView>
  );
}

export default Conteudo;