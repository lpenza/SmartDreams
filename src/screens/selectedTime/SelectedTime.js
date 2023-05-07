import { Text, View, Button, FlatList } from "react-native"
import { SuggestTime } from "../../components"
import { styles} from './styles'

const SelectedTime = ({ time, onClear }) => {
    const timesSuggest = [
        {
            id: '0',
            time: '12:50',
            status: 'suggest',
            cycles: '',
            hours: '',
        },
        {
            id: '1',
            time: '21:30',
            status: '',
            cycles: '',
            hours: '',
        },
        {
            id: '2',
            time: '22:15',
            status: '',
            cycles: '',
            hours: '',
        },
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Selected Time
            </Text>
            <View>
                <Text style={styles.text}>
                    {time}
                </Text>
            </View>
            <View style={styles.listContainer}>
            <FlatList
                data={timesSuggest}
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