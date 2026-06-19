import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

export default function Receitas() {
  const [receitas] = useState([
    { id: '1', nome: 'Bolo de Chocolate', tempo: '45 min' },
    { id: '2', nome: 'Macarrão à Carbonara', tempo: '30 min' },
    { id: '3', nome: 'Salada Verde', tempo: '15 min' },
  ]);

  const renderRecipe = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Text style={styles.cardTime}>⏱️ {item.tempo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={receitas}
        renderItem={renderRecipe}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#FF6B6B',
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardTime: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});