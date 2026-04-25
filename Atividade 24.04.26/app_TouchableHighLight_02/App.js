import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Cabecalho from './src/components/Cabecalho';
import Conteudo from './src/components/Conteudo';
import Rodape from './src/components/Rodape';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
