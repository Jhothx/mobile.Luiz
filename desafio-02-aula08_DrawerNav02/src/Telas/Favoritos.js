import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function Favoritos() {
  const [favoritos] = useState([
    { id: '1', nome: 'Bolo de Chocolate', estrelas: '⭐⭐⭐⭐⭐' },
    { id: '2', nome: 'Brigadeiro', estrelas: '⭐⭐⭐⭐' },
  ]);

  const renderFavorito = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Text style={styles.cardStars}>{item.estrelas}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Receitas Favoritas</Text>
      <FlatList
        data={favoritos}
        renderItem={renderFavorito}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  cardStars: {
    fontSize: 16,
    marginTop: 5,
  },
});