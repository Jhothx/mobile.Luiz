import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Tela03() {
  const nav = useNavigation();

  const imagemMarte = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ3Atcv-AmfcTR8q_6i5983gdtkr4tOLSQ2w&s',
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#e2a27a' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#5d2a14' }}>
        Tela03 - Planeta Marte
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 8, color: '#5d2a14' }}>
        Stack Navigation 2
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 15, color: '#5d2a14' }}>
        Dsv Mobile
      </Text>

      <Image
        source={imagemMarte}
        style={{ width: 220, height: 220, alignSelf: 'center', borderRadius: 20, marginBottom: 20 }}
      />

      <Text style={{ fontSize: 16, marginBottom: 10, color: '#5d2a14' }}>
        Marte é conhecido como o Planeta Vermelho por causa do óxido de ferro em sua superfície.
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 25, color: '#5d2a14' }}>
        Ele também possui montanhas gigantes e um dos maiores vulcões do sistema solar.
      </Text>

      <TouchableOpacity
        style={{ backgroundColor: '#8f4930', padding: 12, borderRadius: 8 }}
        onPress={() => nav.navigate('Tela02')}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
