import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "lightgray",
    marginTop: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  cabecalho: {
    flex: 0.35,
    backgroundColor: "darkred",
    flexDirection: "column",
    paddingVertical: 18,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  cabImagem: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: "white",
    marginBottom: 10,
  },

  cabTitulo: {
    color: "white",
    fontSize: 30,
  },

  cabSubTitulo: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  corpo: {
    flex: 0.65,
    backgroundColor: "white",
  },

  rodape: {
    flex: 0.15,
    backgroundColor: "darkred",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  rodAutor: {
    color: "yellow",
    fontSize: 18,
    fontWeight: "bold",
  },

  conteudo: {
    flex: 1,
    marginTop: 10,
  },

  item: {
    width: "100%",
    borderRadius: 20,
    padding: 18,
    marginTop: 10,
    minHeight: 120,
    justifyContent: "center",
  },

  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  itemImagem: {
    width: 50,
    height: 35,
    resizeMode: "cover",
    borderRadius: 6,
    marginRight: 12,
  },

  itemTexto: {
    fontSize: 24,
    fontWeight: "bold",
  },

  itemSubTexto: {
    fontSize: 14,
    opacity: 0.9,
  },

  cabLinha: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 12,
    backgroundColor: "yellow",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});

export { estilos };