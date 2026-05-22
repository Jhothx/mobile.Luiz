import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Rodape() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>Jhonathan Lima de souza</Text>
        <Text style={styles.date}>22/05/26</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginVertical: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#12345f',
    marginRight: 12,
  },
  info: {
    flexDirection: 'column',
  },
  name: {
    color: '#222',
    fontWeight: '700',
  },
  date: {
    color: '#666',
    fontSize: 12,
  },
});
