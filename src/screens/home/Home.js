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
import { useSelector } from "react-redux";

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
  const imgUri = useSelector((state) => state.auth.profileImg);

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
      isNow:false,
    });
    setState(initialState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          resizeMode="contain"
          source={{
            uri: imgUri??"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/640-crescent-moon.svg/2048px-640-crescent-moon.svg.png",
          }}
          style={styles.img}
        />
        <Text style={styles.text}>I want to wake up at...</Text>
      </View>
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
        />
      </View>
    </View>
  );
};

export default Home;
