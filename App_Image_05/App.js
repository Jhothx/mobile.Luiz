import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <View style={styles.topBar}>
        <Text style={styles.brand}>Simplesmente imediato</Text>
        <Text style={styles.tagline}>para o motoboy</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.logoCircle}>
          <Image
            source={require('./assets/icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.messageWrapper}>
          <Text style={styles.messageTitle}>Seja feliz,</Text>
          <Text style={styles.messageTitle}>trabalhe menos e</Text>
          <Text style={styles.messageTitle}>ganhe bem mais.</Text>
          <Text style={styles.messageSubtitle}>Seu chefe vai querer ser motoboy!</Text>
        </View>
      </View>

      <View style={styles.bottomBar} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    backgroundColor: '#2B2A7B',
    paddingTop: 26,
    paddingBottom: 18,
    alignItems: 'center',
  },
  brand: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  tagline: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#2B2A7B',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
  },
  messageWrapper: {
    alignItems: 'center',
  },
  messageTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1C1B1F',
    textAlign: 'center',
    lineHeight: 32,
  },
  messageSubtitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1B1F',
    textAlign: 'center',
  },
  bottomBar: {
    height: 44,
    backgroundColor: '#2B2A7B',
  },
});
