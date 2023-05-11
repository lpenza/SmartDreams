import { View, Text, Button, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { InputTime } from "../../components";


const Home = ({ onSelectTime }) => {
  const initialState = {
    hour: "HH",
    minute: "MM",
    time: "AM",
    hourOk: false,
    minuteOk: false,
    timeOk: false,
    date: new Date(1598051730000),
    showPicker: false,
  };
  const [state, setState] = useState(initialState);

  const handleChangeHour = (event, selectedDate) => {
    const currentDate = selectedDate;
    const horas = selectedDate.getHours();
    const minutos = selectedDate.getMinutes();
    const meridiano = selectedDate
      .toLocaleTimeString("en-US", { hour12: true })
      .slice(-2);
    setState({ ...state, date: currentDate, hourOk: true, showPicker: false,hour:horas,minute:minutos,time:meridiano });
  };
  const handleSetTime = () => {
    if (!state.hourOk) return;
    onSelectTime(state.date);
    setState(initialState);
  };

  const handleSleepNow = () => {
    const dateNow=new Date()
    onSelectTime(dateNow,true)
    setState(initialState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>I want to wake up at...</Text>
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
        <Button title="Calculate" onPress={handleSetTime} disabled={!state.hourOk}/>
        <Text style={styles.optionText}>If you want to go to bed now...</Text>
        <Button title="Sleep Now" onPress={handleSleepNow} />
      </View>
    </View>
  );
};

export default Home;
