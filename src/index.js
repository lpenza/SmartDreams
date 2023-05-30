import { ActivityIndicator, View, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { useFonts } from "expo-font";
import { Theme } from "./constants";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import store from "./store/index";

export default function App() {
  const [loaded] = useFonts({
    "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    "Inter-Light": require("../assets/fonts/OpenSans-Light.ttf"),
  });

  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size="large" color={Theme.colors.textColor} />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
