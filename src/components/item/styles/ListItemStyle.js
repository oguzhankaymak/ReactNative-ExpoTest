import { StyleSheet } from "react-native";

export default StyleSheet.create({
  item: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },

  title: {
    color: "black",
    fontSize: 15,
    width: 280,
  },

  roundClose: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    borderWidth: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },

  close: {
    fontSize: 13,
    color: "black",
  },
});
