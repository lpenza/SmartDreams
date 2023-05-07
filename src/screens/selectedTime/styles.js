import {StyleSheet} from 'react-native'
import { Theme } from '../../constants'

export const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    listContainer:{
        maxHeight:'20%',
    },
    text:{
        color:Theme.colors.textColor,
    },
}
)