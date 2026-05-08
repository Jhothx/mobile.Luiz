import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const { width } = Dimensions.get("window");

export default function Conteudo() {
  const [nome, setNome] = useState("");
  const [linguagem, setLinguagem] = useState("Python");
  const [mensagem, setMensagem] = useState("");
  const [corInput, setCorInput] = useState("#ffffff");

  function corDeFoco(cor) {
    setCorInput(cor);
  }

  function mostrarMensagem() {
    if (nome.trim() === "") {
      setMensagem("Por favor, Digite seu nome!");
    } else {
      setMensagem(
        `Olá ${nome}, a sua linguagem de programação favorita é ${linguagem}`
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tituloConteudo}>Escolha Linguagem Favorita</Text>

      <TextInput
        placeholder="Digite seu nome"
        placeholderTextColor="#4f4f4f"
        style={[styles.inputNome, { backgroundColor: corInput }]}
        value={nome}
        onChangeText={setNome}
        onFocus={() => corDeFoco("#ffa500")}
        onBlur={() => corDeFoco("#ffffff")}
      />

      <Text style={styles.subtitulo}>Escolha uma linguagem:</Text>

      <View style={styles.pickerArea}>
        <Picker
          selectedValue={linguagem}
          onValueChange={(itemValue) => setLinguagem(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Python" value="Python" />
          <Picker.Item label="Java" value="Java" />
          <Picker.Item label="JavaScript" value="JavaScript" />
          <Picker.Item label="C#" value="C#" />
        </Picker>
      </View>

      <TouchableHighlight
        style={styles.botao}
        underlayColor="#419a43"
        onPress={mostrarMensagem}
      >
        <Text style={styles.textoBotao}>Confirmar</Text>
      </TouchableHighlight>

      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4caf50",
    alignItems: "center",
    paddingTop: 28,
    paddingHorizontal: 18,
  },
  tituloConteudo: {
    fontSize: 22,
    color: "#111111",
    marginBottom: 18,
  },
  inputNome: {
    width: "100%",
    maxWidth: 320,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 11,
    fontSize: 18,
    marginBottom: 16,
  },
  subtitulo: {
    fontSize: 19,
    color: "#111111",
    marginBottom: 10,
  },
  pickerArea: {
    width: "100%",
    maxWidth: 320,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#8a8a8a",
    marginBottom: 16,
    justifyContent: "center",
  },
  picker: {
    width: "100%",
    height: width > 400 ? 60 : 54,
  },
  botao: {
    width: "100%",
    maxWidth: 320,
    backgroundColor: "#4caf50",
    borderRadius: 4,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 18,
  },
  textoBotao: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  mensagem: {
    width: "100%",
    maxWidth: 320,
    fontSize: 16,
    color: "#111111",
    textAlign: "center",
    lineHeight: 24,
  },
});
