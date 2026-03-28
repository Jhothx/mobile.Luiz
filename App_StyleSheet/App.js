import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const icons = {
  usuario:      { uri: 'https://img.icons8.com/color/96/user-male-circle--v1.png' },
  cartao:       { uri: 'https://img.icons8.com/color/96/bank-card-front-side.png' },
  carteirinha:  { uri: 'https://img.icons8.com/color/96/membership-card.png' },
  rede:         { uri: 'https://img.icons8.com/color/96/conference-call.png' },
  estrela:      { uri: 'https://img.icons8.com/color/96/star.png' },
  peso:         { uri: 'https://img.icons8.com/color/96/scale.png' },
  altura:       { uri: 'https://img.icons8.com/color/96/height.png' },
  mais:         { uri: 'https://img.icons8.com/color/96/plus-math.png' },
  chevronDir:   { uri: 'https://img.icons8.com/ios/96/888888/chevron-right.png' },
  chevronBaixo: { uri: 'https://img.icons8.com/ios/96/888888/chevron-down.png' },
  inicio:       { uri: 'https://img.icons8.com/ios-filled/96/ffffff/home.png' },
  locais:       { uri: 'https://img.icons8.com/ios/96/aaaaaa/marker.png' },
  perfil:       { uri: 'https://img.icons8.com/ios-filled/96/ffffff/user.png' },
  agenda:       { uri: 'https://img.icons8.com/ios/96/aaaaaa/calendar.png' },
  menu:         { uri: 'https://img.icons8.com/ios/96/aaaaaa/menu.png' },
};

function App() {
  const [cirurgiaRealizada] = useState('Sim');

  return (
    <View style={{ backgroundColor: '#EFF3F6', flex: 1, paddingTop: 25 }}>

      <View style={{ backgroundColor: 'white', height: '13%', paddingTop: 20, flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={icons.usuario} style={{ width: 42, height: 42, marginRight: 10 }} />
          <Text style={{ fontSize: 15, fontWeight: '600', color: '#1a1a1a' }}>Jhonathan Lima De Souza</Text>
        </View>
        <TouchableOpacity>
          <Image source={icons.cartao} style={{ width: 26, height: 26 }} />
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: '#EFF3F6', flex: 1 }}>
        <ScrollView contentContainerStyle={{ padding: 12, paddingBottom: 20, gap: 10 }} showsVerticalScrollIndicator={false}>

          <View style={{ backgroundColor: 'white', borderRadius: 12, padding: 14, marginBottom: 2 }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 6 }}>
              <View style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: '#e3f0fc', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                <Image source={icons.carteirinha} style={{ width: 20, height: 20 }} />
              </View>
              <Text style={{ fontSize: 14, color: '#333' }}>Ver carteirinha</Text>
              <Image source={icons.chevronDir} style={{ width: 14, height: 14, marginLeft: 'auto' }} />
            </TouchableOpacity>

            <View style={{ height: 0.5, backgroundColor: '#eee', marginVertical: 4 }} />

            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 6 }}>
              <View style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: '#f0e8fc', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                <Image source={icons.rede} style={{ width: 20, height: 20 }} />
              </View>
              <Text style={{ fontSize: 14, color: '#333' }}>Rede Amiga</Text>
              <View style={{ backgroundColor: '#e53935', borderRadius: 20, paddingHorizontal: 8, paddingVertical: 2, marginLeft: 'auto' }}>
                <Text style={{ fontSize: 10, color: 'white', fontWeight: '600' }}>Novidade</Text>
              </View>
              <Image source={icons.chevronDir} style={{ width: 14, height: 14, marginLeft: 8 }} />
            </TouchableOpacity>

            <View style={{ height: 0.5, backgroundColor: '#eee', marginVertical: 4 }} />

            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 6, opacity: 0.4 }} disabled>
              <View style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: '#fffde7', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                <Image source={icons.estrela} style={{ width: 20, height: 20 }} />
              </View>
              <Text style={{ fontSize: 14, color: '#333' }}>Barilife Plus (Em Breve)</Text>
              <Image source={icons.chevronDir} style={{ width: 14, height: 14, marginLeft: 'auto' }} />
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: 'white', borderRadius: 12, padding: 14, marginBottom: 2 }}>
            <Text style={{ fontSize: 12, color: '#888', fontWeight: '500', marginBottom: 10 }}>Medidas</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Image source={icons.peso} style={{ width: 18, height: 18 }} />
              <Text style={{ fontSize: 13, color: '#555', marginLeft: 8 }}>Peso: <Text style={{ fontWeight: '600', color: '#333' }}>1.62 kg</Text></Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 8 }}>
              <Image source={icons.altura} style={{ width: 18, height: 18 }} />
              <Text style={{ fontSize: 13, color: '#555', marginLeft: 8 }}>Altura: <Text style={{ fontWeight: '600', color: '#333' }}>199 cm</Text></Text>
            </View>
          </View>

          <View style={{ backgroundColor: 'white', borderRadius: 12, padding: 14, marginBottom: 2 }}>
            <Text style={{ fontSize: 12, color: '#888', fontWeight: '500', marginBottom: 10 }}>Já fez a Cirurgia Bariátrica?</Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 6, borderWidth: 0.5, borderColor: '#ddd', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 6, alignSelf: 'flex-start' }}>
              <Image source={icons.mais} style={{ width: 18, height: 18 }} />
              <Text style={{ fontSize: 13, color: '#333', marginHorizontal: 4 }}>{cirurgiaRealizada}</Text>
              <Image source={icons.chevronBaixo} style={{ width: 14, height: 14 }} />
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: 'white', borderRadius: 12, padding: 14, marginBottom: 2 }}>
            <Text style={{ fontSize: 12, color: '#888', fontWeight: '500', marginBottom: 10 }}>Cirurgia</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Image source={icons.mais} style={{ width: 18, height: 18, marginTop: 2 }} />
              <View style={{ marginLeft: 8 }}>
                <Text style={{ fontSize: 13, color: '#333' }}>Bypass / Gastroplastia em "Y de Roux"</Text>
                <Text style={{ fontSize: 11, color: '#888', marginTop: 2 }}>02/2017</Text>
              </View>
            </View>
          </View>

          <View style={{ backgroundColor: 'white', borderRadius: 12, padding: 14, marginBottom: 2 }}>
            <Text style={{ fontSize: 12, color: '#888', fontWeight: '500', marginBottom: 10 }}>Hospital</Text>
            <Text style={{ fontSize: 13, color: '#333', fontWeight: '500' }}>HOSPITAL MARCELINO CHAMPAGNAT</Text>
          </View>

        </ScrollView>
      </View>

      <View style={{ backgroundColor: '#1a1a1a', height: 62, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10 }}>
        <TouchableOpacity style={{ alignItems: 'center', gap: 3 }}>
          <Image source={icons.inicio} style={{ width: 22, height: 22 }} />
          <Text style={{ fontSize: 9, color: 'white' }}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center', gap: 3 }}>
          <Image source={icons.locais} style={{ width: 22, height: 22 }} />
          <Text style={{ fontSize: 9, color: '#aaa' }}>Locais</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#4ca0af', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
          <Image source={icons.perfil} style={{ width: 22, height: 22 }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center', gap: 3 }}>
          <Image source={icons.agenda} style={{ width: 22, height: 22 }} />
          <Text style={{ fontSize: 9, color: '#aaa' }}>Agenda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center', gap: 3 }}>
          <Image source={icons.menu} style={{ width: 22, height: 22 }} />
          <Text style={{ fontSize: 9, color: '#aaa' }}>Menu</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default App;