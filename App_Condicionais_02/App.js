import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {

  let img1 = require("./img/img3.png");
  let img2 = 'https://i.pinimg.com/236x/3a/53/5b/3a535b537cc2067bcc9ad041c12f852a.jpg';
  let corFundo1 = 'rgba(0, 0, 0, 0.2)';
  let corLetra1 = 'white';
  let tamanhoLetra1 = 40;

  let OPCAO = 2;

  return OPCAO == 1 ? (
    <View style={{ flex: 1, backgroundColor: 'orange' }}>
      <Image
        source={img1}
        style={{ flex: 1, width: '100%', height: '100%', position: 'absolute' }}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>OPÇÃO 1</Text>
        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 50 }}>OPÇÃO 2</Text>
        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 50 }}>SAIR</Text>
      </View>
    </View>
  ) : (
    <View style={{ flex: 1, backgroundColor: 'orange' }}>
      <Image 
        source={{ uri: img2 }}
        style={{ flex: 1, width: '100%', height: '100%', position: 'absolute' }} 
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>OPÇÃO 1</Text>
        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 50 }}>OPÇÃO 2</Text>
        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 50 }}>SAIR</Text>
      </View>
    </View>
  );
}

export default App;