import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  inputParent: {
    height: 60,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    width: 350,
    alignItems: "center",
    gap: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },

  input: {
    paddingVertical: 6,
    flex: 1,
  },

  formsArea: {
    backgroundColor: "#e4e44e",
    flex: 1,
  },
});
