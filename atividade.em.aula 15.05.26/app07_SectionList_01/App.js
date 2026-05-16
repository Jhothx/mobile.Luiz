import React from 'react';
import { View, Text, SectionList, TouchableOpacity, Alert, Platform } from 'react-native';
import dados_Alunos from './src/dados/alunos.json';
import { estilos1 } from './src/styleSheet/estilos1';

export default function App() {
  function mostrarDetalhes(aluno) {
    const mensagem = `CPF: ${aluno.cpf}\nNascimento: ${aluno.nascimento}\nAno: ${aluno.ano}`;

    if (Platform.OS === 'web') {
      alert(aluno.nome + '\n\n' + mensagem);
    } else {
      Alert.alert(aluno.nome, mensagem);
    }
  }

  function mostraItem({ item }) {
    return (
      <TouchableOpacity
        style={estilos1.item}
        onPress={() => mostrarDetalhes(item)}
        activeOpacity={0.6}
      >
        <Text style={estilos1.nome}>{item.nome}</Text>
      </TouchableOpacity>
    );
  }

  function mostraCabecalhoSecao({ section }) {
    return (
      <View style={estilos1.cabecalhoSecao}>
        <Text style={estilos1.tituloSecao}>{section.title}</Text>
      </View>
    );
  }

  return (
    <View style={estilos1.container}>
      <Text style={estilos1.titulo}>Lista de Alunos por Curso</Text>

      <SectionList
        sections={dados_Alunos}
        keyExtractor={(item) => item.id}
        renderItem={mostraItem}
        renderSectionHeader={mostraCabecalhoSecao}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
}
