import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 35,
  },
  label: {
    fontSize: 14,
    paddingVertical: 5,
    color:theme.colors.textColor
  },
  subLabel: {
    fontSize: 12,
    paddingVertical: 5,
    color:theme.colors.textColor
  },
});
