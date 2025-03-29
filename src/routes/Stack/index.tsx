import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Home from "../../pages/Home";
import Login from "../../pages/login";
import Cadastro from "../../pages/Cadastro";
import Home from "../../pages/Home";
import Agend from "../../pages/Agendamentos";
import Produtos from "../../pages/Produtos";
import Servicos from "../../pages/Servicos";

const { Navigator, Screen } = createNativeStackNavigator();

export default function () {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{ headerBackVisible: true }}>
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="Agend" component={Agend} options={{ headerShown: true }} />
      <Screen
        name="Servicos"
        component={Servicos}
        options={{ headerShown: false }}
      />
      <Screen
        name="Produtos"
        component={Produtos}
        options={{ headerShown: true }}
      />
    </Navigator>
  );
}
