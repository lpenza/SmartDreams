import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SleepNow, Config } from "../../screens";
import HomeNavigator from "../home";
import { Theme } from "../../constants";
import Ionicons from "@expo/vector-icons/Ionicons";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "OpenSans-Bold",
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: Theme.colors.backGroundColor,
          paddingTop:8
        },
        tabBarActiveTintColor: Theme.colors.textColor,
        tabBarInactiveTintColor: Theme.colors.grey,
        tabBarIconStyle: {
          fontSize: 22,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={"home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="SleepNow"
        component={SleepNow}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={"bed-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Config"
        component={Config}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={"settings-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
