import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Rodape() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Jhonathan Lima De Souza &lt;25/03/2006&gt;</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  texto: {
    fontSize: 14,
    color: '#333',
  },
});
