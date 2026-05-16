import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  appBackground: {
    flex: 1,
    backgroundColor: '#f2f4f8',
    padding: 12
  },
  containerCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 8,
    overflow: 'hidden'
  },
  cabecalho: {
    alignItems: 'center',
    paddingVertical: 6
  },
  logoTop: {
    width: 150,
    height: 36,
    resizeMode: 'contain',
    marginVertical: 6
  },
  flagsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingVertical: 6
  },
  flagIcon: {
    width: 48,
    height: 30,
    marginHorizontal: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 6
  },
  card: {
    padding: 12,
    backgroundColor: '#b9d9ee',
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 6
  },
  pais: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  capital: {
    fontSize: 13,
    color: '#6b7280'
  },
  separador: {
    height: 8,
    backgroundColor: 'transparent'
  },
  cabecalhoLista: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 8
  },
  logoBottom: {
    width: 150,
    height: 36,
    resizeMode: 'contain',
    marginVertical: 8
  },
  rodape: {
    alignItems: 'center',
    paddingVertical: 8
  },
  rodapeTexto: {
    color: 'gray'
  }
});
