import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Receitas from './src/Telas/Receitas';
import Ingredientes from './src/Telas/Ingredientes';
import Configuracoes from './src/Telas/Configuracoes';
import Favoritos from './src/Telas/Favoritos';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Receitas"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#FF6B6B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen name="Receitas" component={Receitas} options={{ title: 'Minhas Receitas' }} />
        <Drawer.Screen name="Ingredientes" component={Ingredientes} options={{ title: 'Ingredientes' }} />
        <Drawer.Screen name="Favoritos" component={Favoritos} options={{ title: 'Favoritos' }} />
        <Drawer.Screen name="Configuracoes" component={Configuracoes} options={{ title: 'Configurações' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}