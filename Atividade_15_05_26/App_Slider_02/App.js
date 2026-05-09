import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

const filmes = ['Matrix', 'Vingadores', 'Batman'];

export default function App() {
  const [nome, setNome] = useState('');
  const [filme, setFilme] = useState(filmes[0]);
  const [nota, setNota] = useState(8);
  const [comentario, setComentario] = useState('Muito Bom');
  const [avaliacao, setAvaliacao] = useState({
    nome: '',
    filme: 'Matrix',
    nota: 8,
    comentario: 'Muito Bom',
  });

  function avaliarFilme() {
    setAvaliacao({
      nome,
      filme,
      nota,
      comentario,
    });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Avaliacao de Filmes</Text>

          <TextInput
            placeholder="Digite seu nome"
            placeholderTextColor="#4f4f4f"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Escolha o filme:</Text>

          <View style={styles.pickerBox}>
            <Picker
              selectedValue={filme}
              onValueChange={(itemValue) => setFilme(itemValue)}
            >
              {filmes.map((item) => (
                <Picker.Item key={item} label={item} value={item} />
              ))}
            </Picker>
          </View>

          <View style={styles.medalhaArea}>
            <Image
              source={require('./assets/icon.png')}
              style={styles.medalha}
            />
          </View>

          <Text style={styles.notaTexto}>Nota: {nota.toFixed(1)}</Text>

          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={10}
            step={0.5}
            minimumTrackTintColor="#0b9b8f"
            maximumTrackTintColor="#8a8a8a"
            thumbTintColor="#0b9b8f"
            value={nota}
            onValueChange={setNota}
          />

          <TextInput
            placeholder="Digite seu comentario"
            placeholderTextColor="#4f4f4f"
            style={styles.comentarioInput}
            value={comentario}
            onChangeText={setComentario}
            multiline
            textAlignVertical="top"
          />

          <Pressable style={styles.botao} onPress={avaliarFilme}>
            <Text style={styles.botaoTexto}>Avaliar</Text>
          </Pressable>

          <View style={styles.resultado}>
            <Text style={styles.resultadoTexto}>Nome: {avaliacao.nome}</Text>
            <Text style={styles.resultadoTexto}>Filme: {avaliacao.filme}</Text>
            <Text style={styles.resultadoTexto}>Nota: {avaliacao.nota.toFixed(1)}</Text>
            <Text style={styles.resultadoTexto}>
              Comentario: {avaliacao.comentario}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0ece6',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 12,
  },
  container: {
    backgroundColor: '#87ceeb',
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#d7d7d7',
  },
  titulo: {
    fontSize: 22,
    textAlign: 'center',
    color: '#111',
    marginBottom: 26,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: '#e63946',
    borderRadius: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    color: '#111',
    marginBottom: 4,
  },
  pickerBox: {
    borderWidth: 2,
    borderColor: '#f39c12',
    borderRadius: 4,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginBottom: 10,
  },
  medalhaArea: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  medalha: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  notaTexto: {
    fontSize: 16,
    color: '#111',
    marginBottom: 8,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 14,
  },
  comentarioInput: {
    minHeight: 82,
    borderWidth: 1,
    borderColor: '#e63946',
    borderRadius: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingTop: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  botao: {
    alignSelf: 'center',
    backgroundColor: '#ff5a1f',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginBottom: 18,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    alignItems: 'center',
  },
  resultadoTexto: {
    fontSize: 15,
    color: '#111',
    marginBottom: 3,
  },
});
