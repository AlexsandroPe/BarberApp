import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../pages/Home";
import Login from "../../pages/login";
import Cadastro from "../../pages/Cadastro";

const { Navigator, Screen } = createNativeStackNavigator();

export default function () {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{ headerBackVisible: true }}
    >
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
}
