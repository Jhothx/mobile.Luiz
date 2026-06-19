import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.info}>📧 Email: contato@exemplo.com</Text>
      <Text style={styles.info}>📱 Telefone: (11) 9999-9999</Text>
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
  info: {
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
  },
});