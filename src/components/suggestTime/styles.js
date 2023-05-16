// import {StyleSheet} from 'react-native'
import { StyleSheet } from "react-native";
import { Theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  containerTouchable: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: Theme.colors.textColor,
    borderRadius: 5,
  },
  dataContainer: {
    flex:1,
    flexDirection: "row",
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
  },
  text: {
    fontSize: 17,
    color: Theme.colors.textColor,
  },
});
