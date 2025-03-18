import React, { useState } from "react";
import { Image, Text, View } from "react-native";

import { Styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
// my components
import ButtonMain from "../../components/button";
import Input from "../../components/inputs";

export default function Login() {
  const handleLogin = () => {};

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerC}>
        <Image
          source={require("../../assets/logoBarberLogin.png")}
          style={Styles.headerLogo}
        />
      </View>
      <View style={Styles.formsArea}>
        <View style={Styles.loginArea}>
          <Input
            icon1="mail"
            firstIcon={true}
            secondIcon={false}
            placeholder="Digite seu email:"
          />
          <Input
            icon1="lock"
            firstIcon={true}
            secondIcon={true}
            icon2="eye-off"
            placeholder="Digite sua senha:"
          />
          <ButtonMain
            pageNav="Home"
            title="Login"
            buttonBG={false}
            onPress={() => handleLogin}
          />

          <Text style={Styles.forgotPass}>Forgot Password</Text>
        </View>
        <View style={Styles.signButton}>
          <ButtonMain pageNav="Cadastro" title="Cadastrar-se" buttonBG={true} />
        </View>
      </View>
    </SafeAreaView>
  );
}
