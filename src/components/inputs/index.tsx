import {
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
  View,
} from "react-native";
import { Styles } from "./styles";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";

import PassEye from "../passwordEye";

type props = TextInputProps & {
  firstIcon?: boolean | undefined;
  secondIcon?: boolean | undefined;
  icon1?: string;
  icon2?: string;
  type?: string | undefined;
};
export default function Input({
  firstIcon,
  secondIcon,
  icon1,
  icon2,
  type,
  ...rest
}: props) {
  const ft_icon = (icon: string) => {
    return icon;
  };

  const [text, setText] = useState(true);

  const toggle = () => {
    setText(!text);
  };

  return (
    <View style={Styles.inputParent}>
      {firstIcon ? (
        <Feather name={ft_icon(icon1)} size={22} color="black" />
      ) : (
        <Feather />
      )}
      <TextInput
        style={Styles.input}
        secureTextEntry={type === "password" ? text : false}
        cursorColor={"black"}
        {...rest}
      />
      {secondIcon ? <PassEye toggleText={toggle} /> : <Feather />}
    </View>
  );
}
