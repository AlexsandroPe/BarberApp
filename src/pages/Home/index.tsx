import {
  Button,
  StyleSheet,
  Text,
  View,

} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";


import React from "react";

export default function Home() {

  return (
    <SafeAreaView style={Style.container}> 

    <View style={Style.tabsHeader}>

    </View>
      <Text>home</Text>
    </SafeAreaView>
  );
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsHeader: {
    flexDirection: "row",
    
  }
})
