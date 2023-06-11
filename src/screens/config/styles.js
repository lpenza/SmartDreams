import { StyleSheet } from "react-native";
import { Theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.backGroundColor,
    paddingVertical:30,
    paddingHorizontal:15,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 2,
  },
});
