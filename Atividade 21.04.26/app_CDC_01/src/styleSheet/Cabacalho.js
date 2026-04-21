import React from "react";
import { View, Text, Image } from "react-native";
import { estilos } from "./estilo";

function Cabecalho() {
  let img1 = "https://cdn.motor1.com/images/mgl/1ZQrxK/s3/2023-bmw-m3-cs-first-drive-review.jpg";

  return (
    <View id='cabecalho' style={estilos.cabecalho}>
      <Text style={estilos.cabSubTitulo}>DSV MOBILE</Text>
      <Image source={{ uri: img1 }} style={estilos.cabImagem} />
      <Text style={estilos.cabTitulo}>FUNDAMENTOS II</Text>
      <View style={estilos.cabLinha} />
    </View>
  );
}

export default Cabecalho;