import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../pages/Home";
import Profile from "../../pages/Profile";

const { Navigator, Screen } = createNativeStackNavigator();

export default function () {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{ headerBackVisible: true }}
    >
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
