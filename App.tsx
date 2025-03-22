import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/routes";

import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <>
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
