import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./styles";
import ButtonMain from "../../components/button";
import Input from "../../components/inputs";

import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
export default function ForgotPassword() {

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}>
      <View style={Styles.container}>
        <View style={Styles.closeScreen}>
          <TouchableOpacity activeOpacity={0.9} onPress={() => { navigation.goBack()}}>
            <Feather name="x" color={"rgb(255,255,255)"} size={40}/>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, gap: 38 }}>
          <Text style={Styles.Title}>Redefinir Senha</Text>
          <Text style={Styles.Paragraph}>
            Esqueceu a senha? Não se preocupe! informe o celular utilizado no
            cadastro, que vamos te guiar.
          </Text>
          <Input
            firstIcon
            icon1="smartphone"
            placeholder="(XX) XXXXX-XXXX"
            placeholderTextColor={"#A9A0A0"}
            cursorColor={"#A9A0A0"}
            selectionColor={"#ffffff"}
            style={{ flex: 1, color: "white", fontSize: 18 }}
          />
        </View>
        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <ButtonMain title="Continuar" />
        </View>
      </View>
    </SafeAreaView>
  );
}
