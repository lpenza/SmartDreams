import { Text, View,TouchableOpacity } from "react-native"
import { styles } from "./styles"

export const SuggestTime = ({ item }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={()=>alert('Sweet Dreams!!')}>
            <Text style={styles.text}>
                {item.time}
            </Text>
            <Text>
                {item.id}
            </Text>
        </TouchableOpacity>
    )
}

export default SuggestTime