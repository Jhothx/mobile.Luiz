import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CxTx from './src/components/CxTx';
import { estilos } from './src/styleSheet/estilos';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf] = useState('CPF:999.999.999-00');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [senha, setSenha] = useState('');

  const campos = [
    { key: 'nome', placeholder: 'Digite seu nome', value: nome, onChangeText: (t) => setNome(t.toUpperCase().slice(0,30)), maxLength: 30 },
    { key: 'idade', placeholder: 'qual a sua idade?', value: idade, onChangeText: (t) => setIdade(t.replace(/[^0-9]/g, '').slice(0,2)), keyboardType: 'numeric', maxLength: 2 },
    { key: 'cpf', placeholder: cpf, value: cpf, editable: false },
    { key: 'email', placeholder: 'Digite seu e-mail', value: email, onChangeText: (t) => setEmail(t), keyboardType: 'email-address' },
    { key: 'celular', placeholder: 'Digite seu número celular:', value: celular, onChangeText: (t) => setCelular(t.replace(/[^0-9]/g, '')), keyboardType: 'numeric' },
    { key: 'obs', placeholder: 'Observações:', value: observacoes, onChangeText: (t) => setObservacoes(t.slice(0,200)), multiline: true, maxLength: 200 },
    { key: 'senha', placeholder: 'Digite sua senha', value: senha, onChangeText: (t) => setSenha(t.slice(0,5)), secureTextEntry: true, maxLength: 5 }
  ];

  return (
    <View style={estilos.container}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.titulo}>Aula 06 - Desafio 02</Text>
        <Text style={estilos.subtitulo}>Componente InputText</Text>
      </View>
      <Text style={{width: '90%', marginBottom: 10}}>Verifique o Formulário abaixo:</Text>
      <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center'}}>
        {campos.map(c => (
          <CxTx
            key={c.key}
            placeholder={c.placeholder}
            value={c.value}
            onChangeText={c.onChangeText}
            keyboardType={c.keyboardType}
            maxLength={c.maxLength}
            editable={c.editable}
            multiline={c.multiline}
            secureTextEntry={c.secureTextEntry}
          />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
