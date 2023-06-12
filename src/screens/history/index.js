import React, { useCallback } from "react";
import { View, FlatList,Text } from "react-native";
import { styles } from "./styles";
import { HistoryItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getHistory } from "../../store/actions";
import { useFocusEffect } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import theme from "../../constants/theme";


const History = ({}) => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history.history);
  useFocusEffect(
    useCallback(() => {
      dispatch(getHistory());
    }, [dispatch])
  );
  return (
    <View style={history.length !==0 ?styles.container:styles.emptyContainer}>
      {history.length !==0 ? (
        <FlatList
          data={history}
          renderItem={({ item }) => (
            <HistoryItem
              date={item.date}
              hours={item.hours}
              timeSelected={item.timeSelected}
              cycles={item.cycles}
              wakeUpTime={item.wakeUpTime}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Ionicons name="folder-open-outline" size={100} color={theme.colors.white} />
      )}
    </View>
  );
};

export default History;
