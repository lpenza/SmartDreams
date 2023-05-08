import { View, TextInput } from "react-native"
import { styles } from "./styles"
import { Theme } from "../../constants";



export const InputTime = ({
    hourValue,
    hourChange,
    minuteValue,
    minuteChange,
    timeValue,
    timeChange
}) => {


    return (
        <View style={styles.timeContainer}>
            <TextInput
                style={styles.input}
                value={hourValue}
                onChangeText={hourChange}
                keyboardType="number-pad"
                placeholder="HH"
                placeholderTextColor={Theme.colors.textColor}
                maxLength={2}
            />
            <TextInput
                style={styles.input}
                value={minuteValue}
                onChangeText={minuteChange}
                keyboardType="number-pad"
                placeholder="MM"
                placeholderTextColor={Theme.colors.textColor}
                maxLength={2}
            />
            <TextInput
                style={styles.input}
                value={timeValue}
                onChangeText={timeChange}
                placeholder="AM"
                placeholderTextColor={Theme.colors.textColor}
                maxLength={2}
            />
        </View >
    )
}



export default InputTime