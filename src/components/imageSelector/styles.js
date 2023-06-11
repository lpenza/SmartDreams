import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
  preview: {
    width: "100%",
    height: 100,
    width:100,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius:50,
    borderColor:theme.colors.secondary,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius:50,
  },
});