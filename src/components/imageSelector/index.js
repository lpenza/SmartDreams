import {
  requestCameraPermissionsAsync,
  launchCameraAsync,
} from "expo-image-picker";
import { useState } from "react";
import {
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";



import { styles } from "./styles";
import { Theme } from "../../constants";

export const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permiso denegado",
        "Necesitamos permisos para usar la camara",
        [{ text: "Ok" }]
      );
      return false;
    }

    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    setPickedUrl(image.uri);
    onImage(image.uri);
  };

  return (
    <View>
      <TouchableOpacity style={styles.preview} onPress={onHandleTakeImage}>
        {!pickedUrl ? (
          <Ionicons name="camera-sharp" size={60} color={Theme.colors.white} />
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ImageSelector;
