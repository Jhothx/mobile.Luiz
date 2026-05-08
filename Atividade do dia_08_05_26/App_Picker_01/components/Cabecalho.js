import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Cabecalho() {
  return (
    <View style={styles.topo}>
      <View style={styles.faixaTopo} />
      <Image
        source={require("../assets/icon.png")}
        style={styles.imagem}
        resizeMode="contain"
      />
      <Text style={styles.titulo}>Componente Picker</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingBottom: 28,
  },
  faixaTopo: {
    width: "100%",
    height: 25,
    backgroundColor: "#7bc67e",
    marginBottom: 34,
  },
  imagem: {
    width: 110,
    height: 110,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 27,
    color: "#8fd0ef",
    fontWeight: "bold",
  },
});
