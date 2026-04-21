import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { estilos } from "../styles/estilo";

// Componente Header - contém o título e botão
function Header() {
    return (
        <View style={estilos.header}>
            <TouchableOpacity style={estilos.headerButton}>
                <Text style={estilos.headerButtonText}>VEJA MAIS NO PORTAL</Text>
            </TouchableOpacity>
            <Text style={estilos.headerSubText}>cadastre-se, comente, saiba mais</Text>
            <View style={estilos.divider}></View>
        </View>
    );
}

export default Header;
