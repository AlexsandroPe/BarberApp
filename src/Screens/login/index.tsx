import React, { useState } from "react";
import { Image, Text, View } from "react-native";

import * as Animatable from "react-native-animatable";

import { Styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
// my components
import ButtonMain from "../../components/button";
import Input from "../../components/inputs";

import { useNavigation } from "@react-navigation/native";

const customAnimation = {
  0: {
    opacity: 0,
    translateX: -100,
  },
  1: {
    opacity: 1,
    translateX: 0,
  },
};

export default function Login() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerC}>
        <Animatable.Image
          animation={customAnimation}
          duration={2000}
          easing="ease-in-out"
          source={require("../../assets/logoBarberLogin.png")}
          style={Styles.headerLogo}
        />
      </View>
      <Animatable.View
        animation={customAnimation}
        duration={2000}
        easing="ease-in-out"
        style={Styles.formsArea}>
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
            type="password"
          />
          <ButtonMain
            pageNav="Home"
            title="Login"
            buttonBG={false}
            onPress={() => handleLogin}
          />

          <Text
            style={Styles.forgotPass}
            onPress={() => {
              navigation.navigate("Forgot Password");
            }}>
            Forgot Password
          </Text>
        </View>
        <View style={Styles.signButton}>
          <ButtonMain pageNav="Cadastro" title="Cadastrar-se" buttonBG={true} />
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
}
