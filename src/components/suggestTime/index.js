import { Text, View, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { addHistory } from "../../store/actions/history.actions";

export const SuggestTime = ({ item, date, timeSelected }) => {
  const dispatch = useDispatch();
  const onNewHistory = () => {
    const newHistory = {
      date: date,
      hours: item.hours,
      cycles: item.cycles,
      timeSelected: timeSelected,
      wakeUpTime: item.time,
    };
    dispatch(addHistory(newHistory));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerTouchable}
        onPress={() =>
          Alert.alert(
            "Sweet Dreams!",
            `Sleep at ${item.time} to complete ${item.cycles} sleep cycles`,
            [{ text: "OK", onPress: onNewHistory }]
          )
        }
      >
        <View style={styles.dataContainer}>
          <Text style={styles.text}>{item.time}</Text>
          <Text style={styles.text}>{item.status}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.text}>Sleep cycles</Text>
          <Text style={styles.text}>{item.cycles}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SuggestTime;
