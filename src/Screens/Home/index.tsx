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
    <SafeAreaView edges={["right", "bottom", "left"]} style={Style.container}>
      <View style={Style.headerHome}>
        <View style={Style.nav}>
          <Text>Agendamentos</Text>
          <Text>Produtos</Text>
        </View>

        <Image
          source={require("../../assets/userProfile.png")}
          borderRadius={30}
          style={{ height: 60, width: 60, borderWidth: 1, borderRadius: 50 }}
        />
      </View>

      <View style={Style.searchArea}>
        <Input
          firstIcon={false}
          secondIcon={false}
          placeholder="Informe sua localização"
        />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <MapView
          style={{ height: 282 }}
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
          <Text>Barbearia</Text>
          <ScrollView style={{ width: "100%", paddingVertical: 35 }} horizontal>
            <Image
              source={require("../../assets/hairSalon1.png")}
              style={{ height: 200, marginHorizontal: 10 }}
            />
            <Image
              source={require("../../assets/hairSalon1.png")}
              style={{ height: 200, marginHorizontal: 10 }}
            />
            <Image
              source={require("../../assets/hairSalon1.png")}
              style={{ height: 200, marginHorizontal: 10 }}
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

      <View style={{ alignItems: "center", padding: 20 }}>
        <ButtonMain title="Selecionar" pageNav="Servicos" />
      </View>
    </SafeAreaView>
  );
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerHome: {
    flexDirection: "row",
    paddingHorizontal: 35,
    paddingVertical: 20,
    // borderWidth: 1,
    width: "100%",
    // backgroundColor: "#0022a3",
    alignItems: "center",
    justifyContent: "space-between",
  },

  nav: {
    // borderWidth: 1,
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

  searchArea: {
    alignItems: "center",
    paddingVertical: 28,
    paddingHorizontal: 35,
    width: "100%",
    // borderWidth: 1,
  },
});
