import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default function Home() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={Style.button}
      onPress={() => navigation.navigate("Profile")}
    >
      <Text style={Style.title}>Login</Text>
    </TouchableOpacity>
  );
}

const Style = StyleSheet.create({
  container: {
    height: "100%",
    padding: 35,
  },

  button: {
    backgroundColor: "#888887",
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 52,
  },

  title: {
    fontSize: 18,
  },
});
