import { StyleSheet } from "react-native";
import { Theme } from "../../constants";

export const styles = StyleSheet.create({
  input: {
    color: Theme.colors.textColor,
    borderColor: Theme.colors.textColor,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 6,
    height: 80,
    width: 75,
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 25,
  },
  timeContainer: {
    flexDirection: "row",
    gap: 20,
    marginVertical: 10,
  },
  container:{
    flex:1,
    alignItems:'center'
  }
});
