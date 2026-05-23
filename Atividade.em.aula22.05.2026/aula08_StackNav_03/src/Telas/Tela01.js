import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Tela01() {
  const nav = useNavigation();

  const imagemMercurio = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg',
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#d7d7d7' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#2f2f2f' }}>
        Tela01 - Planeta Mercúrio
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 8, color: '#2f2f2f' }}>
        Stack Navigation 2
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 15, color: '#2f2f2f' }}>
        Dsv Mobile
      </Text>

      <Image
        source={imagemMercurio}
        style={{ width: 220, height: 220, alignSelf: 'center', borderRadius: 20, marginBottom: 20 }}
      />

      <Text style={{ fontSize: 16, marginBottom: 6, color: '#2f2f2f' }}>
        • Mercúrio é o planeta mais próximo do Sol.
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 6, color: '#2f2f2f' }}>
        • Ele tem um ano muito curto, completando a órbita em cerca de 88 dias.
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 20, color: '#2f2f2f' }}>
        • Sua superfície é marcada por crateras e ausência de atmosfera significativa.
      </Text>

      <TouchableOpacity
        style={{ backgroundColor: '#8a8a8a', padding: 12, borderRadius: 8, marginBottom: 10 }}
        onPress={() => nav.navigate('Tela02')}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
          Próxima tela
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: '#5f5f5f', padding: 12, borderRadius: 8 }}
        onPress={() => nav.navigate('Principal')}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
          Voltar para a tela Principal
        </Text>
      </TouchableOpacity>
    </View>
  );
}
