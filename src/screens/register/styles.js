import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:theme.colors.backGroundColor,
    paddingHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
  },
  formContainer:{
    height:'60%',
    width:'100%',
  },
});
