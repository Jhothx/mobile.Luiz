import React from "react";
import {View, Text, Image, ScrollView} from "react-native";
import { estilos } from "./src/styleSheet/estilo";

function Cabecalho({imagem}){
    return(
        <View>
            <View style={estilos.cabecalho}>
                <Text style={estilos.cabTitulo}>FUNDAMENTOS II</Text>
                <Image source={{uri: imagem}} style={estilos.cabImagem} />
                <Text style={estilos.cabSubTitulo}>DSV MOBILE</Text>
            </View>
            <View style={estilos.cabLinha}></View>
        </View>
    );
}

function Conteudo(){
    const paises = [
        {nome: "Japão", cor: "green", textoCor: "white", bandeira: "https://flagcdn.com/jp.svg", habitantes: "125 milhões", pib: "$4.2 trilhões"},
        {nome: "Portugal", cor: "blue", textoCor: "white", bandeira: "https://flagcdn.com/pt.svg", habitantes: "10.5 milhões", pib: "$251 bilhões"},
        {nome: "Itália", cor: "darkred", textoCor: "white", bandeira: "https://flagcdn.com/it.svg", habitantes: "59 milhões", pib: "$2.0 trilhões"},
        {nome: "Alemanha", cor: "gray", textoCor: "black", bandeira: "https://flagcdn.com/de.svg", habitantes: "84 milhões", pib: "$4.4 trilhões"},
        {nome: "Egito", cor: "blue", textoCor: "white", bandeira: "https://flagcdn.com/eg.svg", habitantes: "104 milhões", pib: "$476 bilhões"},
        {nome: "Síria", cor: "yellow", textoCor: "black", bandeira: "https://flagcdn.com/sy.svg", habitantes: "22 milhões", pib: "$24 bilhões"}
    ];
    
    return(
        <ScrollView style={estilos.corpo}>
            {paises.map((pais, index) => (
                <View key={index} style={[estilos.item, {backgroundColor: pais.cor}]}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image source={{uri: pais.bandeira}} style={{width: 50, height: 35, marginRight: 15, borderRadius: 5}} />
                        <View style={{flex: 1}}>
                            <Text style={[estilos.itemTexto, {color: pais.textoCor}]}>{pais.nome}</Text>
                            <Text style={[{fontSize: 12, color: pais.textoCor, opacity: 0.8}]}>Pop: {pais.habitantes}</Text>
                            <Text style={[{fontSize: 12, color: pais.textoCor, opacity: 0.8}]}>PIB: {pais.pib}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

function Rodape({nome, data}){
    return(
        <View style={estilos.rodape}>
            <Text style={estilos.rodAutor}>{nome}</Text>
            <Text style={estilos.rodAutor}>{data}</Text>
        </View>
    );
}

export default function App(){
    return(
        <View style={estilos.fundo}>
            <Cabecalho imagem="https://imgs.search.brave.com/0fzy5WNJBNdvByqNU5Jnktg10UTSm894hgy5ASlppuY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vNTI2MjUz/MS84NzIxL2kvNDUw/L2RlcG9zaXRwaG90/b3NfODcyMTg5MDQt/c3RvY2stcGhvdG8t/bGlnaHRuaW5nLWxl/dHRlci1qLmpwZw" />
            <Conteudo />
            <Rodape nome="Jhonthan Lima e Souza" data="25/03/2006" />
        </View>
    );
}
