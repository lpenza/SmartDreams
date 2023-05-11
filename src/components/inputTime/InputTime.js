import { View, Text } from "react-native";
import { styles } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Theme } from "../../constants";

export const InputTime = ({ hourValue, hourChange, showPicker,hour,minute,time }) => {

  return (
    <View>
      <View style={styles.timeContainer}>
        <Text style={styles.input}>{hour}</Text>
        <Text style={styles.input}>{minute}</Text>
        <Text style={styles.input}>{time}</Text>
      </View>
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={hourValue}
          mode="time"
          is24Hour={false}
          onChange={hourChange}
          display="spinner"
          positiveButton={{ label: "OK" }}
          negativeButton={{ label: "Cancel" }}
        />
      )}
    </View>
  );
};

export default InputTime;
