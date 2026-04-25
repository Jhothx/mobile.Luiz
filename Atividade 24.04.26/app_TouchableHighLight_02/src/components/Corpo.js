import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default function Corpo() {
  const alteraState = () => {
    alert('Olá');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>UseState</Text>
      <TouchableHighlight
        style={styles.botao}
        onPress={alteraState}
        underlayColor="#8B0000"
      >
        <Text style={styles.textoBotao}>CLIQUE AQUI</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#8B0000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
