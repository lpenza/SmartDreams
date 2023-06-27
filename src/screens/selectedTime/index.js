import React, { useCallback, useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { SuggestTime } from "../../components";
import { styles } from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";
import { useSelector } from "react-redux";


const SelectedTime = ({ route }) => {
  const [time, setTime] = useState(moment());
  const [isNow, setIsNow] = useState(true);
  const [date, setDate] = useState("");
  const [timeSelected, setTimeSelected] = useState("");
  const selectedTime = useSelector((state) => state.times.selectedTime);
  const goalQtyCycles = useSelector((state) => state.times.sleepGoal);
  const cycleLength = useSelector((state) => state.times.cycleLength);


  useFocusEffect(
    useCallback(() => {
      if (route.params) {
        const {
          hour: routeHour,
          minute: routeMinute,
          second: routeSecond,
          isNow: routeIsNow,
        } = route.params;
        const newTime = moment().set({
          hour: routeHour,
          minute: routeMinute,
          second: routeSecond,
        });
        setTime(newTime);
        setIsNow(routeIsNow);
      } else {
        const dateNow = moment();
        setTime(dateNow);
        setIsNow(true);
      }
    }, [route.params])
  );

  useEffect(() => {
    setDate(time.format("DD-MM-YYYY"));
    setTimeSelected(time.format("hh:mm A"));
  }, [time]);

  const findOptions = () => {
    let SweemOptions = [];
    let newSuggestedtime;
    let cycles = 0;
    for (let i = 0; i < 6; i++) {
      if (isNow) {
        if (i === 0) {
          newSuggestedtime = moment(time).add((Number(selectedTime)+Number(cycleLength)), "minutes");
        } else {
          newSuggestedtime = moment(newSuggestedtime).add(cycleLength, "minutes");
        }
      } else {
        if (i === 0) {
          newSuggestedtime = moment(time).subtract((Number(selectedTime)+Number(cycleLength)), "minutes");
        } else {
          newSuggestedtime = moment(newSuggestedtime).subtract(cycleLength, "minutes");
          
        }
      }
      cycles++;
      const newSuggest = {
        id: i.toString(),
        time: newSuggestedtime.format("hh:mm A"),
        status: cycles == goalQtyCycles ? "SUGGESTED" : "",
        cycles: cycles.toString(),
        hours: (cycles * 1.5).toFixed(2),
      };
      SweemOptions.push(newSuggest);
    }
    return isNow ? SweemOptions : SweemOptions.reverse();
  };

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
          renderItem={({ item }) => (
            <SuggestTime item={item} date={date} timeSelected={timeSelected} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default SelectedTime;
