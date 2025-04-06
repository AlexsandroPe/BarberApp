import { Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Servicos() {
  const services: string[] = ["Degrade e Bigode", "Degrade", "Sobrancelha"];

  return (
    <SafeAreaView style={{flex: 1}}>
      
      <Text>Serviços</Text>
      <View>
        {services.map((service) => (
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                height: 25,
                width: 25,
                borderWidth: 1,
              }}></TouchableOpacity>
            <Text>{service}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
