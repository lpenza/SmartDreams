import { View } from 'react-native';
import { styles } from './styles'
import { Home, SelectedTime } from './screens'
import { useState } from 'react';

export default function App() {
  const initialState = {
    selectedTime:false,
    time:'',
  }

  const [state, setState] = useState(initialState)

  const onSelectTime=(time)=>{
    setState({...state,selectedTime:true,time:time})
  }

  const onClear=()=>{
    setState({...state,selectedTime:false})
  }

  const Container = ({onSelectTime}) => (
    state.selectedTime ?
      <SelectedTime time={state.time} onClear={onClear} /> : <Home onSelectTime={onSelectTime} />
  )

  return (
    <View style={styles.container}>
      <Container onSelectTime={onSelectTime} />
    </View>
  );
}


