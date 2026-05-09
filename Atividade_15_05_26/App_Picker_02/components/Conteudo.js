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
const albunsIdle = ["I feel", "2", "HEAT", "I NEVER DIE", "I burn"];

export default function Conteudo() {
  const [nome, setNome] = useState("");
  const [album, setAlbum] = useState(albunsIdle[0]);
  const [mensagem, setMensagem] = useState("");
  const [corNome, setCorNome] = useState("#fff7fb");

  function corDeFoco(cor) {
    return cor;
  }

  function escolherAlbum() {
    if (nome.trim() === "") {
      setMensagem("Por favor, digite seu nome!");
      return;
    }

    setMensagem(`Nome: ${nome}\nGrupo: i-dle\nÁlbum escolhido: ${album}`);
  }

  return (
    <View style={styles.areaExterna}>
      <View style={styles.card}>
        <Text style={styles.icone}>💿 🇰🇷</Text>

        <TextInput
          placeholder="Digite seu nome"
          placeholderTextColor="#6a5865"
          style={[styles.inputNome, { backgroundColor: corNome }]}
          value={nome}
          onChangeText={setNome}
          onFocus={() => setCorNome(corDeFoco("#ffa500"))}
          onBlur={() => setCorNome(corDeFoco("#ffffff"))}
        />

        <Text style={styles.subtitulo}>Escolha o álbum:</Text>

        <View style={styles.pickerArea}>
          <Picker
            selectedValue={album}
            onValueChange={(itemValue) => setAlbum(itemValue)}
            style={styles.picker}
          >
            {albunsIdle.map((item) => (
              <Picker.Item key={item} label={item} value={item} />
            ))}
          </Picker>
        </View>

        <TouchableHighlight
          style={styles.botao}
          underlayColor="#c04582"
          onPress={escolherAlbum}
        >
          <Text style={styles.textoBotao}>Escolher Álbum</Text>
        </TouchableHighlight>

        <Text style={styles.mensagem}>{mensagem}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  areaExterna: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingBottom: 14,
  },
  card: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#2b1326",
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 28,
    borderWidth: 8,
    borderColor: "#d4af37",
    borderRadius: 14,
  },
  icone: {
    fontSize: 52,
    textAlign: "center",
    marginBottom: 16,
  },
  inputNome: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d4af37",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 11,
    fontSize: 18,
    marginBottom: 18,
  },
  subtitulo: {
    fontSize: 16,
    color: "#f5e6c8",
    marginBottom: 6,
    fontWeight: "600",
  },
  pickerArea: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d4af37",
    borderRadius: 6,
    marginBottom: 16,
    justifyContent: "center",
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: width > 400 ? 58 : 54,
  },
  botao: {
    alignSelf: "center",
    minWidth: 170,
    backgroundColor: "#7b1e3a",
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignItems: "center",
    marginTop: 6,
    marginBottom: 18,
  },
  textoBotao: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  mensagem: {
    width: "100%",
    fontSize: 15,
    color: "#f5e6c8",
    textAlign: "center",
    lineHeight: 22,
  },
});
