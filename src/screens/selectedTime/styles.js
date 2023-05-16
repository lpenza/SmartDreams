import { StyleSheet } from "react-native";
import { Theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.backGroundColor,
    paddingTop: 20,
  },
  titleContainer:{
    marginHorizontal:6,
    marginBottom:6
  },
  listContainer: {
    flex: 1,
  },
  text: {
    color: Theme.colors.textColor,
    fontSize: 14,
    textAlign: "center",
    fontFamily:'OpenSans-Bold'
  },
});
