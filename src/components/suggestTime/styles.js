import {StyleSheet} from 'react-native'
import { Theme } from '../../constants'

export const styles=StyleSheet.create({
    container:{
        marginVertical:5,
        borderWidth:1,
        borderColor:Theme.colors.textColor,
        borderRadius:5,
        padding:4,
    },
    text:{
        color:Theme.colors.textColor,
    },
}
)