import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: "#dbeafe",
    paddingTop: 48,
  },
  area_cabecalho: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  img_cabecalho: {
    width: 90,
    height: 90,
    marginBottom: 12,
    borderRadius: 18,
  },
  titulo_cabecalho: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1e3a8a",
  },
  area_conteudo: {
    flex: 1,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 18,
    justifyContent: "center",
  },
  texto_conteudo: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: "justify",
    marginBottom: 20,
  },
  caixa_texto: {
    height: 48,
    borderWidth: 1,
    borderColor: "#94a3b8",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  botao: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 18,
  },
  texto_botao: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  rotulo_slider: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginTop: 8,
  },
  nome_usuario: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
  },
  area_rodape: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  texto_rodape: {
    textAlign: "center",
    color: "#334155",
    fontSize: 14,
  },
});
