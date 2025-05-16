import {
  Text,
  View,
  Image,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";

import { Style } from "./styles";

import Input from "../../components/inputs";
import ButtonMain from "../../components/button";
import React from "react";
import { Styles } from "../login/styles";
export default function Cadastro() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={Style.container}>
          <View style={Styles.headerC}>
            <Image
              source={require("../../assets/logoBarberLogin.png")}
              style={Styles.headerLogo}
            />
          </View>
          <View style={Styles.formsArea}>
            <Input firstIcon icon1="user" placeholder="Nome completo" />
            <Input firstIcon icon1="mail" placeholder="Email" />
            <Input firstIcon icon1="smartphone" placeholder="Phone" />
            <Input
              firstIcon
              icon1="lock"
              placeholder="Password"
              secondIcon
              type="password"
            />
            <Input
              firstIcon
              icon1="lock"
              placeholder="Password"
              secondIcon
              type="password"
            />
          </View>

          <View style={Style.button}>
            <ButtonMain pageNav="Login" title="Cadastrar-se" buttonBG />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
