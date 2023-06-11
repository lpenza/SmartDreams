import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { Theme } from "../../constants";
import { useDispatch,useSelector } from "react-redux";
import { selectTheme } from "../../store/actions/themes.action";
import { singOut } from "../../store/actions";
import {Input} from '../../components'


const Config = () => {
  const themes = ["Dark", "Light"];
  const dispatch = useDispatch();
  let selectedTheme=useSelector((state)=>state.themes.selectedTheme)
  
  const OnSelectDarkTheme = () => {
    dispatch(selectTheme(themes[0]));
  };

  const OnSelectLightTheme = () => {
    dispatch(selectTheme(themes[1]));
  };

  const onHandleButtonModal = () => {
    dispatch(singOut());
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: Theme.colors.textColor }}>Time to Sleep</Text>
      {/* <Text style={{ color: Theme.colors.textColor }}>15</Text> */}
      <Input />
      {/* <Text style={{ color: Theme.colors.textColor }}>Selected Theme</Text> */}
      {/* <View style={styles.buttonContainer}>
        <Button title="Dark" onPress={OnSelectDarkTheme} />
        <Button title="Light" onPress={OnSelectLightTheme} />
      </View>
      <Text style={{ color: Theme.colors.textColor }}>{selectedTheme}</Text> */}
      <Button title="Sing Out" onPress={onHandleButtonModal} />
    </View>
  );
};

export default Config;
