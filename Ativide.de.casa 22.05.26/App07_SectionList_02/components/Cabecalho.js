import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cabecalho() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>SECTIONLIST</Text>
      <View style={styles.iconBox}>
        <Text style={styles.icon}>📝</Text>
      </View>
      <Text style={styles.subtitle}>Lista de Tarefas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 8,
  },
  iconBox: {
    backgroundColor: '#3fbba3',
    width: 84,
    height: 84,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  icon: {
    fontSize: 36,
  },
  subtitle: {
    color: '#f5a623',
    fontSize: 18,
    fontWeight: '700',
  },
});
