import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Cabecalho from './src/componentes/Cabecalho';
import Conteudo from './src/componentes/Conteudo';
import Rodape from './src/componentes/Rodape';
import { estilos } from './src/styleSheet/estilos';

export default function App() {
  return (
    <SafeAreaView style={estilos.appBackground}>
      <View style={estilos.containerCard}>
        <Cabecalho />
        <View style={{ flex: 1 }}>
          <Conteudo />
        </View>
        <Rodape />
      </View>
    </SafeAreaView>
  );
}
