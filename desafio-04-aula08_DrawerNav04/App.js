import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Home from './src/Telas/Home';
import Sobre from './src/Telas/Sobre';
import Contato from './src/Telas/Contato';
import Detalhes from './src/Telas/Detalhes';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6200ee',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="HomeStack" component={Home} options={{ title: 'Início' }} />
      <Stack.Screen name="Detalhes" component={Detalhes} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Sobre') {
            iconName = focused ? 'information' : 'information-outline';
          } else if (route.name === 'Contato') {
            iconName = focused ? 'phone' : 'phone-outline';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="HomeTab" component={StackNavigator} options={{ title: 'Início', headerShown: false }} />
      <Tab.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre', headerShown: false }} />
      <Tab.Screen name="Contato" component={Contato} options={{ title: 'Contato', headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
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
        <Drawer.Screen 
          name="TabNavigator" 
          component={TabNavigator} 
          options={{ 
            title: 'Menu Principal',
            headerShown: false,
          }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}