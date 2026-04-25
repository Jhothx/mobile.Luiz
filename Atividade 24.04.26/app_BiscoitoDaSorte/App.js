import React, { useState } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { estilos } from './src/stylesheet/estilos';

function App() {
  const arrayPhrases = ['Siga as boas pessoas e aprenda com elas',
    'O bom-senso vale mais do que muito conhecimento',
    'O riso é a maior distância entre duas pessoas',
    'Deixe de lado as preocupações eseja feliz',
    ' Realize o óbvio, pense no improvável e conquiste o impossível',
    'Acredite em milagres, mas não dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso'];

  const [textoBotao, setTextoBotao] = useState('Quebrar Biscoito...');
  const [imgBiscoito, setImgBiscoito] = useState(require('./src/img/BS02_biscoito.png'));

  function alteraStatusBiscoito() {
    if (textoBotao == "Quebrar Biscoito...") {
      setTextoBotao('Nova Tentativa');
      setImgBiscoito(require('./src/img/BS01_biscoitoAberto.png'));
    }
    else {
      setTextoBotao('Quebrar Biscoito...');
      setImgBiscoito(require('./src/img/BS02_biscoito.png'));
    }
  }
  return (
    <View style={estilos.areaFundo}>
      <View style={estilos.areaTitulo}>
        <Text style={estilos.titulo}>App Biscoito da Sorte</Text>
      </View>
      <View style={estilos.areaImg}>
        <Image source={imgBiscoito}
          style={estilos.img} />
      </View>
      <View>
        <Text style={estilos.textoFrase}>"a sorte esta do seu lado?"</Text>
        <TouchableOpacity style={estilos.botao}
          onPress={alteraStatusBiscoito}>
          <View style={estilos.areaBotao}>
            <Image source={require('./src/img/BS03_Btn_icone_01.png')}
              style={{ marginRight: 20, width: 40, height: 40 }} />
            <Text style={estilos.textoBotao}>{textoBotao}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
