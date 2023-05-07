import { Text,View } from "react-native"
import { styles } from "./styles"

export const SuggestTime = ({item}) => {
    return (
        <View>
        <Text style={styles.text}>
            {item.time}
        </Text>
    </View>
    )
}

export default SuggestTime