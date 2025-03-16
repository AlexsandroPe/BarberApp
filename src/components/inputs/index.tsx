import { Text, TextInput, TouchableOpacity, TextInputProps, View } from "react-native";
import { Styles } from "./styles";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";

type props = TextInputProps & {
  active?: boolean;
  icon1: string;
  icon2?: string;

};
export default function Input({ active, icon1, icon2, ...rest}: props) {
  const ft_icon = (icon: string) => {
    return icon;
  };
  return (
    <View style={Styles.inputParent}>
      {active ? <Feather name={ft_icon(icon1)} size={20} color="black" /> :<Feather />}
      <TextInput
        style={Styles.input}
       
        cursorColor={"black"}
        {...rest}
      />

      {active ? <Feather name={ft_icon(icon2 )} size={20} color={"black"} /> : <Feather />}
    </View>
  );
}
