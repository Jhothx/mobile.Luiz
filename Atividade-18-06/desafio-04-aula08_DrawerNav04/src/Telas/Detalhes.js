import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Detalhes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Detalhes</Text>
      <Text style={styles.description}>
        Você acessou a tela de Detalhes através da Navegação por Pilha (Stack Navigation).
      </Text>
      <Text style={styles.info}>Use o botão de voltar para retornar à Home.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  info: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
});