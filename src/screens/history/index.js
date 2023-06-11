import React, { useCallback } from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { HistoryItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getHistory } from "../../store/actions";
import { useFocusEffect } from "@react-navigation/native";

const History = ({}) => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history.history);
  useFocusEffect(
    useCallback(() => {
      dispatch(getHistory());
    }, [dispatch])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <HistoryItem date={item.date} hours={item.hours} timeSelected={item.timeSelected} cycles={item.cycles}  wakeUpTime={item.wakeUpTime}/>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default History;
