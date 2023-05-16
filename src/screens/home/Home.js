import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { InputTime } from "../../components";
import { Theme } from "../../constants";

const Home = ({ navigation }) => {
  const initialState = {
    hour: "HH",
    minute: "MM",
    time: "AM",
    hourOk: false,
    minuteOk: false,
    timeOk: false,
    date: new Date(),
    showPicker: false,
  };
  const [state, setState] = useState(initialState);

  const handleChangeHour = (event, selectedDate) => {
    if(selectedDate.getTime()!==state.date.getTime()){
      const currentDate = selectedDate;
      const horas = selectedDate.getHours();
      const minutos = selectedDate.getMinutes();
      const meridiano = selectedDate
        .toLocaleTimeString("en-US", { hour12: true })
        .slice(-2);
      setState({
        ...state,
        date: currentDate,
        hourOk: true,
        showPicker: false,
        hour: horas,
        minute: minutos,
        time: meridiano,
      });
    }
  };
  const handleSetTime = () => {
    if (!state.hourOk) {
      Alert.alert("Hi!", "First, you must select a valid time");
      return;
    }
    const currentTime = state.date;
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();
    navigation.navigate("SelectedTime", {
      hour,
      minute,
      second,
      isNow: false,
    });
    setState(initialState);
  };

  const handleSleepNow = () => {
    const dateNow = new Date();
    const hour = dateNow.getHours();
    const minute = dateNow.getMinutes();
    const second = dateNow.getSeconds();
    navigation.navigate("SelectedTime", {
      hour,
      minute,
      second,
      isNow: true,
    });
    setState(initialState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/640-crescent-moon.svg/2048px-640-crescent-moon.svg.png",
          }}
          style={styles.icon}
        />
        <Text style={styles.text}>I want to wake up at...</Text>
      </View>
      {/* <Text style={styles.tex}>I want to go to bed at...</Text> */}
      <TouchableOpacity
        style={styles.timeContainer}
        onPress={() => setState({ ...state, showPicker: true })}
      >
        <InputTime
          hourValue={state.date}
          hourChange={handleChangeHour}
          showPicker={state.showPicker}
          hour={state.hour}
          minute={state.minute}
          time={state.time}
        />
      </TouchableOpacity>
      <View style={styles.buttonsCointainer}>
        <Button
          title="Calculate"
          onPress={handleSetTime}
          color={Theme.colors.backGroundColor}
        />
        <Text style={styles.optionText}>If you want to go to bed now...</Text>
        <Button
          title="Sleep Now"
          onPress={handleSleepNow}
          color={Theme.colors.backGroundColor}
        />
      </View>
    </View>
  );
};

export default Home;
