import { StyleSheet } from "react-native";
import { Theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.backGroundColor,
    paddingTop: 90,
    paddingHorizontal: 30,
  },
  img:{
    width: 70,
    height: 70,
    borderRadius:50,
  },
  titleContainer: {
    alignItems: "center",
  },
  text: {
    color: Theme.colors.textColor,
    fontSize: 28,
    marginVertical: 40,
    fontFamily: "OpenSans-Bold",
  },
  optionText: {
    color: Theme.colors.textColor,
    fontSize: 15,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "OpenSans-Bold",
    textAlign:'center'
  },
  timeContainer: {
    borderWidth: 1,
    borderColor: Theme.colors.textColor,
    padding: 25,
    borderRadius: 10,
    height: 150,
  },
  buttonsCointainer: {
    justifyContent: "space-around",
    marginTop: 70,
  },
});
