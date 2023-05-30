import { Text, View, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";

export const SuggestTime = ({ item }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerTouchable}
        onPress={() =>
          Alert.alert("Sweet Dreams!!",`You selected the time: ${item.time}`, [
            { text: "Set Alarm", onPress: () => console.warn("Sweet Dreams!!",`You are going to wake up at: ${item.time}`) },
          ])
        }
      >
        <View style={styles.dataContainer}>
        <Text style={styles.text}>{item.time}</Text>
        <Text style={styles.text}>{item.status}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SuggestTime;
