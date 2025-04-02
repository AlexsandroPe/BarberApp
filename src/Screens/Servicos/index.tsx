import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Servicos() {
  return (
    <SafeAreaView>
      <Text>Serviços</Text>

      <View>
        <View>
          <CheckBOx />
          <Text>Corte degradê</Text>
        </View>
        <View>
          <CheckBOx />
          <Text>Corte degradê + sobrancelha</Text>
        </View>
        <View>
          <CheckBOx />
          <Text>Barba</Text>
        </View>
        <View>
          <CheckBOx />
          <Text>Pintar</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
