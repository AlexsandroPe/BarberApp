import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#A47963"
  },
  headerHome: {
    flexDirection: "row",
    paddingHorizontal: 35,
    paddingVertical: 20,
    // borderWidth: 1,
    width: "100%",
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    // backgroundColor: "#A47963",
    alignItems: "center",
    justifyContent: "space-between",
  },

  nav: {
    // borderWidth: 1,
    flexDirection: "row",
    gap: 28,
    alignItems: "flex-start",
  },

  userImg: {
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  searchArea: {
    alignItems: "center",
    paddingVertical: 28,
    paddingHorizontal: 35,
    width: "100%",
    // borderWidth: 1,
  },
});
