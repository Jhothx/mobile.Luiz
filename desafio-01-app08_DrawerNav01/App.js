import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/Telas/Home';
import Sobre from './src/Telas/Sobre';
import Contato from './src/Telas/Contato';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#6200ee',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen name="Home" component={Home} options={{ title: 'Início' }} />
        <Drawer.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre' }} />
        <Drawer.Screen name="Contato" component={Contato} options={{ title: 'Contato' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}