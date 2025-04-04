import { Text, View, Image, Button } from "react-native";

import { Style } from "./styles";

import Input from "../../components/inputs";
import ButtonMain from "../../components/button";
import React from "react";
import { Styles } from "../login/styles";
export default function Cadastro() {
  return (
    <View style={Style.container}>
      <View style={Styles.headerC}>
        <Image
          source={require("../../assets/logoBarberLogin.png")}
          style={Styles.headerLogo}
        />
      </View>

      <Input firstIcon icon1="user" placeholder="Nome completo"/>q
      <Input firstIcon icon1="mail" placeholder="Email" />
      <Input firstIcon icon1="smartphone" placeholder="Phone" />
      <Input firstIcon icon1="lock" placeholder="Password" secondIcon type="password" />
      <Input firstIcon icon1="lock" placeholder="Password" secondIcon type="password"/>

      <View style={Style.button}>
        <ButtonMain pageNav="Login" title="Cadastrar-se" buttonBG />
      </View>
    </View>
  );
}
