import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "./styles";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";

type props = {
  active?: boolean;
};
export default function Input({ active }: props) {
  return (
    <View style={Styles.inputParent}>
      <Feather name="user" size={28} color="black" />
      <TextInput
        style={Styles.input}
        placeholder="Digite Algo"
        cursorColor={"black"}
      />

      {active ? <Feather name="eye-off" size={28} /> : <Feather />}
    </View>
  );
}
