import React from "react";
import { View, Text, Image } from "react-native";
import { estilos } from "../styleSheet/estilos";

function Cabecalho() {
  const img_logo = require("../../assets/icon.png");
  const titulo = "Componente Slider";

  return (
    <View style={estilos.area_cabecalho}>
      <Image source={img_logo} style={estilos.img_cabecalho} />
      <Text style={estilos.titulo_cabecalho}>{titulo}</Text>
    </View>
  );
}

export default Cabecalho;
