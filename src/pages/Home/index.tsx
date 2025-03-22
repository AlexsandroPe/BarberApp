import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import React, { useState } from "react";
import Input from "../../components/inputs";
import ButtonMain from "../../components/button";

export default function Home() {
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.headerHome}>
        <View style={Style.nav}>
          <Text>Agendamentos</Text>
          <Text>Produtos</Text>
        </View>

        <Image
          source={require("../../assets/images.jpg")}
          borderRadius={30}
          style={{ height: 80, width: 80 }}
        />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <Input firstIcon={false} secondIcon={false} />
        </View>
        <MapView
          style={{ height: 400 }}
          zoomControlEnabled
          zoomEnabled
          initialRegion={{
            latitude: -23.6071,
            longitude: -46.752,
            latitudeDelta: 0.01, // Ajuste para o nível de zoom desejado
            longitudeDelta: 0.02,
          }}
        />
        <View style={{ width: "100%" }}>
          <ScrollView style={{ width: "100%", padding: 40 }} horizontal>
            <Image
              source={require("../../assets/hairSalon1.png")}
              style={{ height: 250, marginHorizontal: 10 }}
            />
            <Image
              source={require("../../assets/hairSalon1.png")}
              style={{ height: 250, marginHorizontal: 10 }}
            />
            <Image
              source={require("../../assets/hairSalon1.png")}
              style={{ height: 250, marginHorizontal: 10 }}
            />
          </ScrollView>
        </View>
        <View>
          <Text>Hair salon iformations</Text>
          <Text>Hair salon iformations</Text>
          <Text>Hair salon iformations</Text>
          <Text>Hair salon iformations</Text>
        </View>
      </ScrollView>

      <ButtonMain title="Selecionar" pageNav="Servicos" />
    </SafeAreaView>
  );
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 23,
  },
  headerHome: {
    flexDirection: "row",
    borderWidth: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  nav: {
    borderWidth: 1,
    flexDirection: "row",
    gap: 28,
    alignItems: "flex-start",
  },

  userImg: {
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
