import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    // gap: 28,
    flex: 1,
  },

  headerLogo: {
    height: 180,
    width: 180,
    // borderWidth: 1,
  },

  headerC: {
    // borderWidth: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flex: 2 / 3,
  },

  formsArea: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    gap: 30,
    // borderWidth: 1,
    paddingVertical: 20,
  },

  loginArea: {
    alignItems: "center",
    gap: 28,
  },

  forgotPass: {
    textDecorationLine: "underline",
    fontWeight: "400",
    fontSize: 17,
    // borderWidth: 1,
    alignSelf: "flex-end",
    color: "#0484f0"
  },

  signButton: {
    justifyContent: "center",
    // borderWidth: 1,
    flex: 1,
  },
});
