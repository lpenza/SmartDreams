import { View, Text, Button, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import { Theme } from "../../constants";
import { useDispatch,useSelector } from "react-redux";
import {
  selectTime,
  selecCycleLength,
  selectSleepGoal,
} from "../../store/actions/times.action";
import { singOut } from "../../store/actions";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";

const Config = () => {
  const dispatch = useDispatch();
  const selectedTime = useSelector((state) => state.times.selectedTime);
  const goalQtyCycles = useSelector((state) => state.times.sleepGoal);
  const currentCycleLength = useSelector((state) => state.times.cycleLength);
  const [minutes, setMinutes] = useState("");
  const [cyclesQty, setCyclesQty] = useState("");
  const [cycleLength, setCycleLength] = useState("");

  const OnSelectTime = () => {
    dispatch(selectTime(minutes));
    setMinutes("");
  };

  const OnSelectCyclesQty = () => {
    dispatch(selectSleepGoal(cyclesQty));
    setCyclesQty("");
  };

  const OnSelectCycleLength = () => {
    dispatch(selecCycleLength(cycleLength));
    setCycleLength("");
  };

  const onHandleButtonModal = () => {
    dispatch(singOut());
  };

  return (
    <View style={styles.container}>
      <View style={styles.setTimeContainer}>
        <Text style={{ color: Theme.colors.textColor }}>Time to Sleep</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={(text) => setMinutes(text)}
            value={minutes}
            placeholder={selectedTime.toString()}
          />
          <TouchableOpacity disabled={!minutes} onPress={OnSelectTime}>
            <Ionicons
              name={minutes ? "md-save" : "md-save-outline"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <Text style={{ color: Theme.colors.textColor }}>
          Sleep Cycle Length
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={(text) => setCycleLength(text)}
            value={cycleLength}
            placeholder={currentCycleLength.toString()}
          />
          <TouchableOpacity disabled={!cycleLength} onPress={OnSelectCycleLength}>
            <Ionicons
              name={cycleLength ? "md-save" : "md-save-outline"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <Text style={{ color: Theme.colors.textColor }}>Sleep Goal</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={(text) => setCyclesQty(text)}
            value={cyclesQty}
            placeholder={goalQtyCycles.toString()}
          />
          <TouchableOpacity disabled={!cyclesQty} onPress={OnSelectCyclesQty}>
            <Ionicons
              name={cyclesQty ? "md-save" : "md-save-outline"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sing Out" onPress={onHandleButtonModal} />
      </View>
    </View>
  );
};

export default Config;
