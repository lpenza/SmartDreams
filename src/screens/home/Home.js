import { View, Text, Button } from "react-native";
import { styles } from './styles'
import { useState } from "react";
import { InputTime } from "../../components";

const Home = ({ onSelectTime }) => {
    const initialState = {
        hour: '',
        minute: '',
        time: '',
        hourOk: false,
        minuteOk: false,
        timeOk: false,
    }
    const [state, setState] = useState(initialState)

    const validateInput = (tipe, input) => {
        const regexHour = /^([1-9]|1[0-2])$/;
        const regexMinute = /^([0-9]|[1-5][0-9]|60)$/;
        const regexTime = /^(am|pm)$/;
        switch (tipe) {
            case 'h':
                return regexHour.test(input)
            case 'm':
                return regexMinute.test(input)
            case 't':
                return regexTime.test(input)
        }
    }

    const handleChangeHour = (newText) => {
        setState({ ...state, hour: newText, hourOk: true })
    }
    const handleChangeMinute = (newText) => {
        setState({ ...state, minute: newText, minuteOk: true })
    }
    const handleChangeTime = (newText) => {
        setState({ ...state, time: newText, timeOk: true })
    }

    const handleSetTime = () => {
        const Ok = state.hourOk && state.minuteOk && state.timeOk
        if (!Ok) return
        let selectedTime = `${state.hour}:${state.minute}:${state.time}`
        onSelectTime(selectedTime)
        setState(initialState)
    }

    const handleSleepNow = () => {
        alert('Sweet Dreams!!')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>I want to wake up at...</Text>
            <View style={styles.timeContainer}>
                <InputTime
                    hourValue={state.hour}
                    hourChange={handleChangeHour}
                    minuteValue={state.minute}
                    minuteChange={handleChangeMinute}
                    timeValue={state.time}
                    timeChange={handleChangeTime}
                />
            </View>
            <View style={styles.buttonsCointainer}>
                <Button
                    title="Choose bedtime"
                    onPress={handleSetTime}
                />
                <Text style={styles.optionText}>
                    If you want to go to bed now...
                </Text>
                <Button
                    title="Sleep Now"
                    onPress={handleSleepNow}
                />
            </View>
        </View>
    )
}

export default Home;