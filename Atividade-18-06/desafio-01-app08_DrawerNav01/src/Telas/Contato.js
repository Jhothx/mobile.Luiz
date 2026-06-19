import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.subtitle}>Entre em contato conosco</Text>
      <Text style={styles.info}>Email: contato@exemplo.com</Text>
      <Text style={styles.info}>Telefone: (11) 9999-9999</Text>
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
    marginBottom: 20,
  },
  info: {
    fontSize: 14,
    marginBottom: 10,
    color: '#333',
  },
});