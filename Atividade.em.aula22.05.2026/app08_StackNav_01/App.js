import React from "react";
import Principal from "./src/Telas/Principal";
import Carnaval from "./src/Telas/Carnaval";
import FestaJunina from "./src/Telas/FestaJunina";
import Halloween from "./src/Telas/Halloween";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{
            title: "Bem-Vindo(a)",
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Carnaval"
          component={Carnaval}
          options={{
            title: "Carnaval",
            headerStyle: { backgroundColor: "red" },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name="FestaJunina"
          component={FestaJunina}
          options={{
            title: "Festa Junina",
            headerStyle: { backgroundColor: "blue" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Halloween"
          component={Halloween}
          options={{
            title: "Halloween",
            headerStyle: { backgroundColor: "yellow" },
            headerTintColor: "black",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
