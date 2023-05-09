import { Text, View, Button, FlatList } from "react-native";
import { SuggestTime } from "../../components";
import { styles } from "./styles";

const SelectedTime = ({ time, onClear, isNow }) => {

  const findOptions = () => {
    let options = [];
    let newSuggestedtime;
    for (i = 0; i < 10; i++) {
      if (!isNow) {
        if (i === 0) {
          newSuggestedtime = new Date(time.setMinutes(time.getMinutes() - 105));
        } else {
          newSuggestedtime = new Date(
            newSuggestedtime.setMinutes(newSuggestedtime.getMinutes() - 90)
          );
        }
      } else {
        if (i === 0) {
          newSuggestedtime = new Date(time.setMinutes(time.getMinutes() + 105));
        } else {
          newSuggestedtime = new Date(
            newSuggestedtime.setMinutes(newSuggestedtime.getMinutes() + 90)
          );
        }
      }
      const newSuggest = {
        id: i,
        time: newSuggestedtime.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
          second: undefined,
        }),
        status: "",
        cycles: "",
        hours: "",
      };
      options =!isNow? [...options, newSuggest].reverse():[...options, newSuggest];
    }
    return options;
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectedTimeContainer}>
        <Text style={styles.text}>
          {!isNow?
          `Bedtime options for feeling refreshed at 
          ${time.toLocaleTimeString("en-US", {
            hour12: true,
            hour: "numeric",
            minute: "numeric",
            second: undefined,
          })} :`
          :'If you sleep now, set alarm for these times:'
          }
        </Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={findOptions()}
          renderItem={({ item }) => <SuggestTime item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Button onPress={onClear} title="Go back" />
    </View>
  );
};

export default SelectedTime;
