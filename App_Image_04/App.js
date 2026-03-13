import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.content}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('./assets/icon.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textWrapper}>
          <Text style={styles.title}>Bem-vindo(a) ao aplicativo Barilife!</Text>
          <Text style={styles.subtitle}>
            A Sociedade Brasileira de Cirurgia Bariátrica e Metabólica (SBCBM)
            desenvolveu o aplicativo pensando em você, paciente bariátrico. É um
            aplicativo inovador e gratuito.
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
            <Text style={[styles.buttonText, styles.buttonTextSecondary]}>Pular</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonPrimary, styles.buttonPrimaryMargin]}
          >
            <Text style={[styles.buttonText, styles.buttonTextPrimary]}>Próximo</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  imageWrapper: {
    marginTop: 40,
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 220,
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
    color: '#1C1B1F',
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    color: '#5F5F67',
  },
  footer: {
    paddingBottom: 32,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D1D6',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#3B82F6',
    width: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonPrimaryMargin: {
    marginLeft: 12,
  },
  button: {
    flex: 1,
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#3B82F6',
  },
  buttonSecondary: {
    backgroundColor: '#F2F2F7',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextPrimary: {
    color: '#FFFFFF',
  },
  buttonTextSecondary: {
    color: '#1C1B1F',
  },
});
