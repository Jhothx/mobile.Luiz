import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { estilos } from "../styles/estilo";

// Componente Rodape - botões de ação no final
function Rodape() {
    return (
        <View style={estilos.rodape}>
            <TouchableOpacity style={estilos.rodapeIcon}>
                <Image
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/542/542689.png" }}
                    style={estilos.rodapeIconImage}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <TouchableOpacity style={estilos.rodapeIcon}>
                <Image
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/3670/3670031.png" }}
                    style={estilos.rodapeIconImage}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <TouchableOpacity style={estilos.rodapeIcon}>
                <Image
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/2504/2504766.png" }}
                    style={estilos.rodapeIconImage}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
}

export default Rodape;
