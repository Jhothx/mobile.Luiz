import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Cabecalho() {
  return (
    <View style={styles.topo}>
      <Text style={styles.titulo}>Escolha Seu Album do i-dle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    alignItems: "center",
    marginBottom: 22,
  },
  titulo: {
    fontSize: 23,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
