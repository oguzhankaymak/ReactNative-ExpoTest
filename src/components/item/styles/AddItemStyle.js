import { StyleSheet } from "react-native";

export default StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  textInput: {
    height: 35,
    borderColor: "gray",
    borderWidth: 1,
    width: 300,
    padding: 10,
  },

  roundPlus: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: "#d8bfd8",
    justifyContent: "center",
    alignItems: "center",
  },

  plus: {
    fontSize: 20,
    color: "white",
  },
});
