import { ActivityIndicator,View } from 'react-native';
import { styles } from './styles'
import { Home, SelectedTime } from './screens'
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { Theme } from './constants';

export default function App() {
  const initialState = {
    selectedTime:false,
    time:'',
    // isNow:false,
  }

  const [state, setState] = useState(initialState)

  const [loaded] = useFonts({
    'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'Inter-Light': require('../assets/fonts/OpenSans-Light.ttf'),
  });

  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size="large" color={Theme.colors.textColor}/>
      </View>
    );
  }

  const onSelectTime=(time,isNow=false)=>{
    setState({...state,selectedTime:true,time:time,isNow:isNow})
  }

  const onClear=()=>{
    setState({...state,selectedTime:false})
  }

  const Container = ({onSelectTime}) => (
    state.selectedTime ?
      <SelectedTime time={state.time} onClear={onClear} isNow={state.isNow} /> : <Home onSelectTime={onSelectTime} />
  )

  return (
    <View style={styles.container}>
      <Container onSelectTime={onSelectTime} />
    </View>
  );
}


