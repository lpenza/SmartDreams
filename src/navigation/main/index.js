import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, SelectedTime } from "../../screens";
import { Theme } from "../../constants";


const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: Theme.colors.backGroundColor,
      },
      headerTintColor: Theme.colors.textColor,
      headerTitleStyle: {
        fontFamily: "OpenSans-Bold",
      },
      headerTitleAlign:'center',
    }}
    >
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="SelectedTime" component={SelectedTime} options={{
        headerTitle:'Optimal Bedtimes'
      }}/>
    </Stack.Navigator>
  );
};

export default MainNavigator;