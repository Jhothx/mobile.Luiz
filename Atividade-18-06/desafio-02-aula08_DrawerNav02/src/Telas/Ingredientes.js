import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Switch } from 'react-native';

export default function Ingredientes() {
  const [ingredientes, setIngredientes] = useState([
    { id: '1', nome: 'Farinha', selecionado: false },
    { id: '2', nome: 'Açúcar', selecionado: false },
    { id: '3', nome: 'Ovos', selecionado: false },
    { id: '4', nome: 'Leite', selecionado: false },
  ]);

  const toggleIngrediente = (id) => {
    setIngredientes(ingredientes.map(item =>
      item.id === id ? { ...item, selecionado: !item.selecionado } : item
    ));
  };

  const renderIngrediente = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.nome}</Text>
      <Switch
        value={item.selecionado}
        onValueChange={() => toggleIngrediente(item.id)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingredientes Disponíveis</Text>
      <FlatList
        data={ingredientes}
        renderItem={renderIngrediente}
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
  },
});