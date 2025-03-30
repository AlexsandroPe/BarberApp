import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Styles } from "./styles";

export default function ForgotPassword() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.container}>
        <Text style={{ fontSize: 48 }}></Text>
      </View>
    </SafeAreaView>
  );
}
