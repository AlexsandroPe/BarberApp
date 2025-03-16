import React, { useState } from "react";
import { Image, SafeAreaView, View } from "react-native";

import { Styles } from "./styles";

// my components
import ButtonMain from "../../components/button";
import Input from "../../components/inputs";

export default function Login() {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerC}>
        <Image
          source={require("../../assets/logoBarberApp.png")}
          style={Styles.headerLogo}
        />
      </View>
      <View style={Styles.formsArea}>
        <Input active={false} />
        <Input active={true} />
        <ButtonMain />
      </View>
    </SafeAreaView>
  );
}
