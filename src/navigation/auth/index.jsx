import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Auth, Register } from "../../screens";
import theme from "../../constants/theme";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor:theme.colors.textColor,
          headerStyle: {
            backgroundColor: theme.colors.backGroundColor,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
