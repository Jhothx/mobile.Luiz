import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Slider } from 'react-native';

export default function Configuracoes() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [tamanhoFonte, setTamanhoFonte] = useState(14);

  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <Text style={styles.label}>Notificações</Text>
        <Switch
          value={notificacoes}
          onValueChange={setNotificacoes}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.label}>Tamanho da Fonte: {tamanhoFonte.toFixed(0)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={10}
          maximumValue={24}
          value={tamanhoFonte}
          onValueChange={setTamanhoFonte}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  option: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  slider: {
    width: 150,
    height: 40,
  },
});