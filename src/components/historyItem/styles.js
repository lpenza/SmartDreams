import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.backGroundColor,
    borderColor:theme.colors.secondary,
    borderStyle:"solid",
    borderWidth:1,
    borderRadius:4,
    padding:10,
    marginHorizontal:10,
    marginVertical:10,

  },
  dateContainer: {
    display:'flex',
    flexDirection:"row",
    justifyContent:'space-between',
    marginBottom:10,
  },
  infoContainer: {
    display:'flex',
    flexDirection:"row",
    justifyContent:'space-between',
    marginVertical:10
  },
  text: {
    color: theme.colors.textColor,
  },
  
});
