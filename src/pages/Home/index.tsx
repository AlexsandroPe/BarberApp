import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";
import React from "react";

export default function Home() {
  return (
    <SafeAreaView style={Style.container}>
      <View>
        <View style={Style.nav}></View>
        <View style={Style.userImg}></View>
      </View>
      <ScrollView style={{ flex: 1 }}>
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
        <View>
          <ScrollView
            style={{ gap: 40, width: "100%" }}
            horizontal
            snapToAlignment="end"
            centerContent
            role="button"
            disableIntervalMomentum
            showsHorizontalScrollIndicator
          >
            <Image
              source={require("../../assets/hairSalon1.png")}
              style={{ height: 140 }}
            />
            <Image
              source={require("../../assets/hairSalon1.png")}
              style={{ height: 140 }}
            />
            <Image
              source={require("../../assets/hairSalon1.png")}
              style={{ height: 140 }}
            />
          </ScrollView>
        </View>
        <View>
          <Text>Hair salon iformations</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsHeader: {
    flexDirection: "row",
  },
});
