import { StyleSheet } from 'react-native'
import { Theme } from '../../constants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    text: {
        color: Theme.colors.textColor,
        fontSize: 30,
        marginVertical: 40
    },
    optionText: {
        color: Theme.colors.textColor,
        fontSize: 17,
        marginTop: 20,
        marginBottom:10,
    },
    timeContainer: {
        borderWidth: 1,
        borderColor: Theme.colors.textColor,
        padding: 25,
        borderRadius: 10,
    },
    buttonsCointainer: {
        // flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-around',
        marginTop: 20,
        gap: 5,
    }
}
)