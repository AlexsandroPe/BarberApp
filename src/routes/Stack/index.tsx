import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Login from "../../pages/login";

const { Navigator, Screen } = createNativeStackNavigator();

export default function () {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{ headerBackVisible: true }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={Home} />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerBackVisible: true,
          headerShown: true,
          headerBackTitle: "Voltar",
        }}
      />
    </Navigator>
  );
}
