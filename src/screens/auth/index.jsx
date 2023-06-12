import { useReducer } from "react";
import {
  View,
  Text,
  Modal,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { Input } from "../../components";
import theme from "../../constants/theme";
import { clearError, signIn } from "../../store/actions";
import { UPDATE_FORM, onInputChange } from "../../utils/form";

const initialState = {
  email: { value: "", error: "", touched: false, hasError: true },
  password: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
  }
};

const Auth = ({ navigation }) => {
  const dispatch = useDispatch();
  const { error, isLoading, hasError } = useSelector((state) => state.auth);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const title = "Login";
  const buttonTitle = "Login";
  const messageText = "Don't have an account?";

  const onHandleChangeAuth = () => {
    navigation.navigate("Register", {});
  };

  const onHandleAuth = () => {
    dispatch(
      signIn({
        email: formState.email.value,
        password: formState.password.value,
      })
    );
  };

  const onHandleButtonModal = () => {
    dispatch(clearError());
  };

  const onHandlerInputChange = ({ value, name }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState });
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Input
          placeholder="email@gmail.com"
          placeholderTextColor={theme.colors.textColor}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) =>
            onHandlerInputChange({ value: text, name: "email" })
          }
          value={formState.email.value}
          label="Email"
          error={formState.email.error}
          touched={formState.email.touched}
          hasError={formState.email.hasError}
          color={theme.colors.white}
        />
        <Input
          placeholder="********"
          placeholderTextColor={theme.colors.textColor}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) =>
            onHandlerInputChange({ value: text, name: "password" })
          }
          value={formState.password.value}
          label="Password"
          error={formState.password.error}
          touched={formState.password.touched}
          hasError={formState.password.hasError}
          color={theme.colors.textColor}
        />
        <View style={styles.linkContainer}>
          <TouchableOpacity style={styles.link} onPress={onHandleChangeAuth}>
            <Text style={styles.linkText}>{messageText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submitContainer}>
          <Button
            disabled={!formState.isFormValid}
            title={buttonTitle}
            onPress={onHandleAuth}
          />
        </View>
      </View>
      <Modal visible={hasError || isLoading} transparent animationType="fade">
        <View style={styles.containerStyle}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{error ? error : "Loading"}</Text>
            {error ? (
              <Button title="OK" onPress={onHandleButtonModal} />
            ) : (
              <ActivityIndicator size="small" color={theme.colors.textColor} />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Auth;
