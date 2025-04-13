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
import React, { useState, useEffect } from "react";
import Input from "../../components/inputs";
import ButtonMain from "../../components/button";
import {HomeStyles} from "./styles";



export default function Home() {

  const [image, setImage] = useState<number>();
  const [ativo, setAtivo] = useState<boolean>()





    
  
  
  
  return (
    <SafeAreaView edges={["right", "bottom", "left"]} style={HomeStyles.container}>
      <View style={HomeStyles.headerHome}>
        <Image
          source={require("../../assets/userProfile.png")}
          borderRadius={30}
          style={{ height: 60, width: 60, borderWidth: 1, borderRadius: 50 }}
        />
      </View>

      <View style={HomeStyles.searchArea}>
        <Input
          firstIcon={true}
          icon1="map-pin"
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
          <ScrollView
            style={{
              width: "100%",
              paddingVertical: 35,
            }}
            horizontal>
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

      <View
        style={{
          alignItems: "center",
          padding: 20,
          backgroundColor: "#535050",
        }}>
        <ButtonMain title="Selecionar" pageNav="Servicos" />
      </View>
    </SafeAreaView>
  );
}
