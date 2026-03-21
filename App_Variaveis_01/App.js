import React from 'react';
import { View, Text } from 'react-native';

function App() {
  const TITULO = "VARIÁVEIS EM REACT NATIVE";
  const PARAGRAFO = "Variáveis são espaços de memória do computador destinados a \
dados que são manipulados e alterados durante a execução de um \
algoritmo. \nLogo, para que o resultado seja o esperado, é preciso \
considerar o tipo de dados que será armazenado e também definir o \
nome das variáveis.";

  const RODAPÉ1 = "Luiz Fernando Corcini";
  const RODAPÉ2 = "2026";

return (
  <View style={{
    flex: 1, backgroundColor: 'powderblue',
    paddingVertical: 30, paddingHorizontal: 20
  }}>
    <View style={{ flexDirection: 'column', flex: 0.2, width: '100%', backgroundColor: 'skyblue', justifyContent: 'center' }}>
      <Text style={{ fontSize: 26, fontFamily: "Times", textAlign: "center" }}>{TITULO}</Text>
    </View>

    <View style={{ flex: 0.7, marginTop: 10, backgroundColor: 'skyblue', padding: 10 }}>
      <Text style={{ fontSize: 20, textAlign: "justify" }}>{PARAGRAFO}</Text>
    </View>

    <View style={{
      flex: 0.1,
      flexDirection: 'row',
      justifyContent: "space-around",
      backgroundColor: "skyblue",
      marginTop: 10,
      alignItems: "center"
    }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'red' }}>{RODAPÉ1}</Text>
      <Text style={{ fontSize: 30, fontStyle: 'italic' }}>{RODAPÉ2}</Text>
    </View>
  </View>
);
}

export default App;