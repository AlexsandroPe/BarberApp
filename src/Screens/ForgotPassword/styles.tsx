import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#535050",
    height: "90%",
    borderTopStartRadius: 28,
    borderEndStartRadius: 28,
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 20,
  },

  Title: {
    color: "#fff",
    fontSize: 26,
    textAlign: "center",
    fontWeight: "600",
  },
  Paragraph: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
  },

  closeScreen:{
    // borderWidth: 1,
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "flex-end", 
    
  }
});
