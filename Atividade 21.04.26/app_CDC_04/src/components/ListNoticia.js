import React from "react";
import { View, ScrollView, Text } from "react-native";
import { estilos } from "../styles/estilo";
import ItemNoticia from "./ItemNoticia";

// Componente ListNoticia - componente que agrupa o título e a lista de notícias
function ListNoticia({ noticias }) {
    return (
        <View>
            <Text style={estilos.tituloSecao}>LEIA MAIS</Text>
            <ScrollView style={estilos.scrollView} scrollEnabled={true}>
                {noticias.map((noticia) => (
                    <ItemNoticia key={noticia.id} noticia={noticia} />
                ))}
            </ScrollView>
        </View>
    );
}

export default ListNoticia;
