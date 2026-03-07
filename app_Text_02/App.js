import React from "react";
import { View, Text } from "react-native";

function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#eeeeee",
        padding: 10,
      }}
    >
      {/* View 1 */}
      <View
        style={{
          flex: 1,
          backgroundColor: "lightblue",
          borderWidth: 3,
          borderColor: "blue",
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "darkblue",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          No céu azul da manhã{"\n"}
          o vento dança devagar,{"\n"}
          levando sonhos leves{"\n"}
          para quem quiser sonhar.
        </Text>
      </View>

      {/* View 2 */}
      <View
        style={{
          flex: 1,
          backgroundColor: "lightgreen",
          borderWidth: 3,
          borderColor: "green",
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "darkgreen",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          No silêncio da tarde{"\n"}
          as folhas começam a cair,{"\n"}
          cada uma contando histórias{"\n"}
          que o tempo quis ouvir.
        </Text>
      </View>

      {/* View 3 */}
      <View
        style={{
          flex: 1,
          backgroundColor: "lightcoral",
          borderWidth: 3,
          borderColor: "red",
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            color: "white",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          Na rua vazia da noite{"\n"}
          a lua começa a brilhar,{"\n"}
          iluminando caminhos{"\n"}
          de quem precisa caminhar.
        </Text>
      </View>

      {/* View 4 */}
      <View
        style={{
          flex: 1,
          backgroundColor: "orange",
          borderWidth: 3,
          borderColor: "darkorange",
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          No nascer de um novo dia{"\n"}
          a esperança vem morar,{"\n"}
          lembrando que cada passo{"\n"}
          é um novo jeito de tentar.
        </Text>
      </View>
    </View>
  );
}

export default App;