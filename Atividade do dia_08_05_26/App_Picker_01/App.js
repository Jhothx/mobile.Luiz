import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle="dark-content" backgroundColor="#e9e1d7" />
      <Cabecalho />
      <Conteudo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#4caf50",
  },
});
