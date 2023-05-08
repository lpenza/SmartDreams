import { Text, View, Button, FlatList } from "react-native"
import { SuggestTime } from "../../components"
import { styles } from './styles'

const SelectedTime = ({ time, onClear }) => {

    const findOptions = () => {
        let options = []
        // const timeNow = new Date()
        // let withinOfRange=true
        let newSuggestedtime
        for (i = 0; i<10; i++) {
            if (i === 0) {
                newSuggestedtime = new Date(time.setMinutes(time.getMinutes() - 105))
            }
            else {
                newSuggestedtime = new Date(newSuggestedtime.setMinutes(newSuggestedtime.getMinutes() - 90))
            }
            const newSuggest = {
                id: i,
                time: newSuggestedtime.toLocaleTimeString('en-US'),
                status: '',
                cycles: '',
                hours: '',
            }
            // if(newSuggestedtime>timeNow){
            //     alert(newSuggest.time)
            //     withinOfRange=false
            // }
            // else{
            //     console.log('esta ok',newSuggestedtime,timeNow)
            // }
            options = [...options, newSuggest]
        }
        return options
    }

    return (
        <View style={styles.container}>
            <View style={styles.selectedTimeContainer}>
                <Text style={styles.text}>
                    Bedtime options for feeling refreshed at {time.toLocaleTimeString('en-US')
                    }:
                </Text>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={findOptions()}
                    renderItem={({ item }) => <SuggestTime item={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <Button
                onPress={onClear}
                title='Go back'
            />
        </View>
    )
}

export default SelectedTime