import React from "react";
import { View, Text } from 'react-native';
import { estilos } from "./estilo";

function Rodape(props) {
  let autor = props.autor || "Felipe Luz";
  let data = props.data || "10/04/2026";

  return (
    <View id='rodape' style={estilos.rodape}>
      <Text style={estilos.rodAutor}>{autor}</Text>
      <Text style={estilos.rodAutor}>{data}</Text>
    </View>
  );
}

export default Rodape;