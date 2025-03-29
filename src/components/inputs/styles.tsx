import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  inputParent: {
    height: 52,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    width: 350,
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    gap: 8,
  },

  input: {
    flex: 1,
  },

  formsArea: {
    backgroundColor: "#e4e44e",
    flex: 1,
  },
});
