import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

const HistoryItem = ({ date, hours, timeSelected, cycles, wakeUpTime }) => {
  let qtyhours = Math.floor(hours);
  let qtyMinutes = Math.round((hours - qtyhours) * 60);
  const [showInfo, setShowInfo] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setShowInfo(!showInfo)}
    >
      <View style={styles.dateContainer}>
        <Text style={styles.text}>Date</Text>
        <Text style={styles.text}>{date}</Text>
      </View>
      {showInfo ? (
        <>
          <View>
            <View style={styles.infoContainer}>
              <Text style={styles.text}>Bedtime</Text>
              <Text style={styles.text}>{wakeUpTime}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.text}>Time to wake up</Text>
              <Text style={styles.text}>{timeSelected}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.text}>Hours of sleep</Text>
              <Text style={styles.text}>
                {qtyhours} h {qtyMinutes} min
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.text}>Sleep cycles</Text>
              <Text style={styles.text}>{cycles}</Text>
            </View>
          </View>
        </>
      ) : null}
    </TouchableOpacity>
  );
};

export default HistoryItem;
