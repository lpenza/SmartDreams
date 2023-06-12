import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:theme.colors.backGroundColor,
  },
  content: {
    width: "80%",
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderWidth: 1,
    borderColor:theme.colors.secondary,
    borderRadius:7,
    minHeight: 340,
    backgroundColor:'white',

  },
  title: {
    fontSize: 16,
    textAlign: "center",
    color:theme.colors.textColor,
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  link: {
    borderBottomColor:theme.colors.secondary,
    borderBottomWidth: 1,
    textAlign: "center",
  },
  linkText: {
    fontSize: 14,
    borderBottomColor: "#0582CA",
    borderBottomWidth: 1,
    color: "#0582CA",
    textAlign: "center",
  },
  submitContainer: {
    paddingVertical: 5,
  },
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "75%",
    minHeight: 110,
    justifyContent: "space-around",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor:theme.colors.backGroundColor,
  },
  modalTitle: {
    fontSize: 14,
    textAlign: "center",
    color:theme.colors.white
  },
});
