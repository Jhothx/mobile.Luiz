import React from "react";
import { View, Text, Image } from "react-native";
import { estilos } from "../styles/estilo";

// Componente ItemNoticia - componente reutilizável para cada notícia
function ItemNoticia({ noticia }) {
    return (
        <View style={estilos.itemNoticia}>
            <View style={estilos.itemConteudo}>
                <Text style={estilos.itemCategoriaText}>{noticia.titulo}</Text>
                <Text style={estilos.itemManchetaText}>{noticia.manchete}</Text>
                <Text style={estilos.itemDataText}>{noticia.data}</Text>
            </View>
            <View style={estilos.itemImagem}>
                <Image
                    source={{ uri: noticia.imagem }}
                    style={{ width: 50, height: 50 }}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
}

export default ItemNoticia;
