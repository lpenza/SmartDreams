import { StyleSheet } from "react-native";
import { Theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Theme.colors.backGroundColor
  },
  buttonContainer:{
    flexDirection:'row',
    gap:2,
  }
});
