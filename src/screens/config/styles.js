import { StyleSheet } from "react-native";
import { Theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  setTimeContainer:{
    height:180
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: "25%",
  },
  input:{
    fontSize: 13,
    borderBottomWidth: 1,
    borderBottomColor:Theme.colors.secondary,
    width: "90%",
    paddingVertical: 5,
    marginRight:15,
    marginBottom:10
  },
  buttonContainer: {
    gap: 10,
  },
});
