import React from 'react';
import { View, Image } from 'react-native';
import { estilos } from '../styleSheet/estilos';

const FLAG_CODES = ['br','ar','cl','py','uy','us','ca','mx'];

export default function Rodape() {
  return (
    <View style={estilos.rodape}>
      <View style={estilos.flagsRow}>
        {FLAG_CODES.map(code => (
          <Image
            key={code}
            source={{ uri: `https://flagcdn.com/w80/${code}.png` }}
            style={estilos.flagIcon}
          />
        ))}
      </View>
    </View>
  );
}
