import {StyleSheet} from 'react-native'
import { Theme } from '../../constants'

export const styles=StyleSheet.create({
    input:{
        color:Theme.colors.textColor,
        borderColor:Theme.colors.textColor,
        borderLeftWidth:1,
        borderRightWidth:1,
        padding:5,
        borderRadius:6,
        height:80,
        width:65,
        paddingHorizontal:15,
        fontSize:20,
    },
    timeContainer:{
        flexDirection:'row',
        gap:10,
        marginVertical:10,
    },
}
)