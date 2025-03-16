import { Text, TouchableOpacity } from "react-native";

import { Style } from "./styles";

import { useNavigation } from "@react-navigation/native";
export default function ButtonMain() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={Style.button}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Profile")}
    >
      <Text style={Style.title}>Login</Text>
    </TouchableOpacity>
  );
}
