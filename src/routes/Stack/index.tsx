import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Home from "../../pages/Home";
import Login from "../../Screens/login";
import Cadastro from "../../Screens/Cadastro";
import Home from "../../Screens/Home";
import Agend from "../../Screens/Agendamentos";
import Produtos from "../../Screens/Produtos";
import Servicos from "../../Screens/Servicos";
import ForgotPassword from "../../Screens/ForgotPassword";

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
      <Screen
        name="Forgot Password"
        component={ForgotPassword}
        options={{ headerShown: true }}
      />
    </Navigator>
  );
}
