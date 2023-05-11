import { StyleSheet} from 'react-native';
import { Theme } from './constants/index'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:Theme.colors.backGroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical:150,
    },
  });