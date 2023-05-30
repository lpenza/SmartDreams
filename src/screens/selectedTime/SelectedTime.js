import { Text, View, FlatList } from "react-native";
import { SuggestTime } from "../../components";
import { styles } from "./styles";

const SelectedTime = ({ route }) => {
  
  let hour, minute, second, isNow;

  if (route.params) {
    ({ hour, minute, second, isNow } = route.params);
  } else {
    const dateNow = new Date();
    hour = dateNow.getHours();
    minute = dateNow.getMinutes();
    second = dateNow.getSeconds();
    isNow = true;
  }

  const time = new Date();
  time.setHours(hour);
  time.setMinutes(minute);
  time.setSeconds(second);

  const findOptions = () => {
    let options = [];
    let newSuggestedtime;
    for (i = 0; i < 6; i++) {
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
        status: "SUGGESTED",
        cycles: "",
        hours: "",
      };
      options.push(newSuggest);
    }
    options = !isNow ? options.reverse() : options;
    return options;
  };

  const timeSelected = time.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: undefined,
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>
          {!isNow
            ? `Bedtime options for feeling refreshed at: ${timeSelected}`
            : "If you sleep now, set alarm for these times:"}
        </Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={findOptions()}
          renderItem={({ item }) => <SuggestTime item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default SelectedTime;
