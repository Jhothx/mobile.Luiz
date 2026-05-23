import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Tela02() {
  const nav = useNavigation();

  const imagemVenus = {
    uri: 'https://cdn.mos.cms.futurecdn.net/RifjtkFLBEFgzkZqWEh69P-1200-80.jpg',
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#f4e0aa' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#5c4217' }}>
        Tela02 - Planeta Vênus
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 8, color: '#5c4217' }}>
        Stack Navigation 2
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 15, color: '#5c4217' }}>
        Dsv Mobile
      </Text>

      <Image
        source={imagemVenus}
        style={{ width: 220, height: 220, alignSelf: 'center', borderRadius: 20, marginBottom: 20 }}
      />

      <Text style={{ fontSize: 16, marginBottom: 10, color: '#5c4217' }}>
        Vênus é o planeta mais quente do sistema solar, com uma atmosfera densa e gases tóxicos.
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 25, color: '#5c4217' }}>
        Ele também é conhecido como o planeta irmão da Terra por ser parecido em tamanho e massa.
      </Text>

      <TouchableOpacity
        style={{ backgroundColor: '#c79638', padding: 12, borderRadius: 8, marginBottom: 10 }}
        onPress={() => nav.navigate('Tela01')}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
          Voltar para a Tela01
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: '#8f631b', padding: 12, borderRadius: 8 }}
        onPress={() => nav.navigate('Tela03')}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
          Seguir para a Tela03
        </Text>
      </TouchableOpacity>
    </View>
  );
}
