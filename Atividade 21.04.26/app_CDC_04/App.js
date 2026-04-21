import React from "react";
import { View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

// Importando componentes
import Header from "./src/components/Header";
import ListNoticia from "./src/components/ListNoticia";
import Rodape from "./src/components/Rodape";

// Importando dados
import { noticias } from "./src/dados/noticias";

// Importando estilos
import { estilos } from "./src/styles/estilo";

// Componente Principal - App
function App() {
    return (
        <SafeAreaView style={estilos.container}>
            <StatusBar barStyle="light-content" />
            
            {/* Componente Header */}
            <Header />
            
            {/* Componente ListNoticia que contém ItemNoticia dentro */}
            <ListNoticia noticias={noticias} />
            
            {/* Componente Rodape */}
            <Rodape />
        </SafeAreaView>
    );
}

export default App;
