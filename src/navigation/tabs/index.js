import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Config, History } from "../../screens";
import HomeNavigator from "../home";
import { Theme } from "../../constants";
import Ionicons from "@expo/vector-icons/Ionicons";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="mainNavigation"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Theme.colors.backGroundColor,
          paddingTop: 8,
        },
        tabBarActiveTintColor: Theme.colors.textColor,
        tabBarInactiveTintColor: Theme.colors.grey,
      }}
    >
      <BottomTab.Screen
        name="mainNavigation"
        component={HomeNavigator}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={"home-outline"} size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      {/* <BottomTab.Screen
        name="SleepNow"
        component={SelectedTime}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={"bed-outline"} size={size} color={color} />
          ),
          headerTitle: "Optimal Bedtimes",
          headerStyle: {
            backgroundColor: Theme.colors.backGroundColor,
          },
          headerTintColor: Theme.colors.textColor,
          headerTitleStyle: {
            fontFamily: "OpenSans-Bold",
          },
          headerTitleAlign: "center",
        }}
      /> */}
      <BottomTab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={"newspaper-outline"} size={size} color={color} />
          ),
          headerTitle: "History",
          headerStyle: {
            backgroundColor: Theme.colors.backGroundColor,
          },
          headerTintColor: Theme.colors.textColor,
          headerTitleStyle: {
            fontFamily: "OpenSans-Bold",
          },
          headerTitleAlign: "center",
        }}
      />
      <BottomTab.Screen
        name="Config"
        component={Config}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={"settings-outline"} size={size} color={color} />
          ),
          headerTitle: "Settings",
          headerStyle: {
            backgroundColor: Theme.colors.backGroundColor,
          },
          headerTintColor: Theme.colors.textColor,
          headerTitleStyle: {
            fontFamily: "OpenSans-Bold",
          },
          headerTitleAlign: "center",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
