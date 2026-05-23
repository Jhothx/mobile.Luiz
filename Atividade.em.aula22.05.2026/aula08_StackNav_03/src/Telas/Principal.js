import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Principal() {
  const nav = useNavigation();

  const imagemPrincipal = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxO_U6M77O3nQ_e9yN8NHOCP_zA_XRPDvEqw&s',
  };

  function proximaTela() {
    nav.navigate('Tela01');
  }

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f4f4f4' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
        Stack Navigation - parte 2
      </Text>
      <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 10 }}>
        🌞 Sistema Solar
      </Text>
      <Image
        source={imagemPrincipal}
        style={{ width: 220, height: 220, alignSelf: 'center', borderRadius: 20, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
        SISTEMA SOLAR
      </Text>

      <TouchableOpacity
        style={{ backgroundColor: '#1e90ff', padding: 14, borderRadius: 8 }}
        onPress={proximaTela}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
          Iniciar viagem
        </Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 30, textAlign: 'center', fontSize: 16 }}>
        Dsv Mobile
      </Text>
    </View>
  );
}
