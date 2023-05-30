import react from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { Theme } from "../../constants";
import { useDispatch,useSelector } from "react-redux";
import { selectTheme } from "../../store/actions/themes.action";

const Config = () => {
  const themes = ["Dark", "Light"];
  const dispatch = useDispatch();
  //La idea es utilizar este valor para condicionar el objeto theme que se encuentra en constants
  let selectedTheme=useSelector((state)=>state.themes.selectedTheme)
  
  const OnSelectDarkTheme = () => {
    dispatch(selectTheme(themes[0]));
  };

  const OnSelectLightTheme = () => {
    dispatch(selectTheme(themes[1]));
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: Theme.colors.textColor }}>Selected Theme</Text>
      <View style={styles.buttonContainer}>
        <Button title="Dark" onPress={OnSelectDarkTheme} />
        <Button title="Light" onPress={OnSelectLightTheme} />
      </View>
      <Text style={{ color: Theme.colors.textColor }}>{selectedTheme}</Text>
    </View>
  );
};

export default Config;
