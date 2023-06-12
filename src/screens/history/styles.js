import { StyleSheet } from "react-native";
import { Theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Theme.colors.backGroundColor,
    backgroundColor: 'white',
  },
  emptyContainer:{
    flex: 1,
    // backgroundColor: Theme.colors.backGroundColor,
    justifyContent:'center',
    alignItems:'center',
  }
});
