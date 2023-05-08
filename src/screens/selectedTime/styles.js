import {StyleSheet} from 'react-native'
import { Theme } from '../../constants'

export const styles=StyleSheet.create({
    container:{
        flex: 1,
    },
    selectedTimeContainer:{
        gap:10,
        borderBottomWidth:1,
        borderBottomColor:Theme.colors.textColor,
        marginBottom:10
    },
    listContainer:{
        maxHeight:'30%',
    },
    text:{
        color:Theme.colors.textColor,
        fontSize:16,
    },
}
)