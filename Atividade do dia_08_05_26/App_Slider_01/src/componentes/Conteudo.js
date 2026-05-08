import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { estilos } from "../styleSheet/estilos";
import Slider from "@react-native-community/slider";

function Conteudo() {
  const texto =
    "O componente Slider permite que o usuario escolha um valor de um intervalo predefinido de valores, arrastando um botao ao longo de uma linha do controle deslizante";

  const [corFundoCxTxt, setCorFundoCxTxt] = useState("white");
  const [nomeUsr, setNomeUsr] = useState("");
  const [corTexto, setCorTexto] = useState("black");
  const [corFundoConteudo, setCorFundoConteudo] = useState("yellow");

  function alteraCorFundo() {
    if (corFundoCxTxt === "white") {
      setCorFundoCxTxt("orange");
    } else {
      setCorFundoCxTxt("white");
    }
  }

  function alteraNomeUsr(nomeUsuario) {
    setNomeUsr(nomeUsuario);
  }

  function deslizaSlider1() {
    const cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setCorTexto(cor);
  }

  function deslizaSlider2() {
    const cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setCorFundoConteudo(cor);
  }

  return (
    <View style={[estilos.area_conteudo, { backgroundColor: corFundoConteudo }]}>
      <Text style={[estilos.texto_conteudo, { color: corTexto }]}>{texto}</Text>

      <TextInput
        placeholder="Digite seu nome"
        placeholderTextColor="#555"
        style={[estilos.caixa_texto, { backgroundColor: corFundoCxTxt }]}
        value={nomeUsr}
        onChangeText={alteraNomeUsr}
      />

      <TouchableHighlight style={estilos.botao} onPress={alteraCorFundo} underlayColor="#1f4ea3">
        <Text style={estilos.texto_botao}>Alterar cor da caixa</Text>
      </TouchableHighlight>

      <Text style={estilos.rotulo_slider}>Alterar cor do texto</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#1f2937"
        maximumTrackTintColor="#9ca3af"
        thumbTintColor="#2563eb"
        onValueChange={deslizaSlider1}
      />

      <Text style={estilos.rotulo_slider}>Alterar fundo do conteudo</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#1f2937"
        maximumTrackTintColor="#9ca3af"
        thumbTintColor="#dc2626"
        onValueChange={deslizaSlider2}
      />

      <Text style={estilos.nome_usuario}>Ola, {nomeUsr || "visitante"}!</Text>
    </View>
  );
}

export default Conteudo;
