import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Home!</Text>
      <Text style={styles.subtitle}>Navegação Completa: TABS + DRAWER + STACK</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Detalhes')}
      >
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>

      <Text style={styles.description}>
        📌 Use as TABS no rodapé{"\n"}
        📌 Deslize para abrir o DRAWER{"\n"}
        📌 Toque no botão para STACK Navigation
      </Text>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    lineHeight: 20,
  },
});