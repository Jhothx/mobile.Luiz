import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const alunos = [
  { nome: 'Alberto', curso: 'ADS', periodo: 5 },
  { nome: 'Eduardo', curso: 'ESoft', periodo: 3 },
  { nome: 'Maria', curso: 'ESoft', periodo: 3 },
  { nome: 'Luiz', curso: 'ADS', periodo: 4 },
  { nome: 'Isadora', curso: 'DIR', periodo: 8 },
  { nome: 'Jéssica', curso: 'ADS', periodo: 6 },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>LAÇOS DE REPETIÇÃO</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.logo}
        />
        <Text style={styles.subtitle}>DSV MOBILE</Text>
      </View>

      <ScrollView style={styles.list} contentContainerStyle={styles.listContent}> 
        {alunos.map((aluno, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.avatar} />
            <View style={styles.cardText}>
              <Text style={styles.cardName}>{aluno.nome}</Text>
              <Text style={styles.cardInfo}>Curso: {aluno.curso}</Text>
              <Text style={styles.cardInfo}>Período: {aluno.periodo}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Luiz Fernando Corcini</Text>
        <Text style={styles.footerText}>mes/ano</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A0000',
  },
  header: {
    height: 180,
    backgroundColor: '#8A0000',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  logo: {
    width: 90,
    height: 90,
    marginVertical: 12,
    borderRadius: 18,
    backgroundColor: '#202020',
  },
  subtitle: {
    color: '#FFD700',
    fontSize: 22,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  listContent: {
    paddingVertical: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#87CEFA',
    marginHorizontal: 8,
    marginVertical: 6,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    backgroundColor: '#80C6EA',
    borderWidth: 2,
    borderColor: '#3A8CC9',
    marginRight: 12,
  },
  cardText: {
    flex: 1,
  },
  cardName: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  cardInfo: {
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    backgroundColor: '#8A0000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderTopColor: '#fff',
    borderTopWidth: 2,
  },
  footerText: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
