import { View , Button } from "react-native";
import { styles } from "./styles";
import { Input, ImageSelector } from "../../components";
import theme from "../../constants/theme";
import { useReducer, useState } from "react";
import { UPDATE_FORM, onInputChange } from "../../utils/form";
import {  signUp } from "../../store/actions";
import { useDispatch } from "react-redux";


const initialState = {
  name: { value: "", error: "", touched: false, hasError: true },
  lastName: { value: "", error: "", touched: false, hasError: true },
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

const Register = () => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const onImage = (imageUri) => {
    setImage(imageUri);
  };
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const onHandlerInputChange = ({ value, name }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState });
  };

  const onHandleRegister = () => {
    dispatch(
      signUp({
        name: formState.name.value,
        lastName: formState.lastName.value,
        profileImg: image,
        email: formState.email.value,
        password: formState.password.value,
      })
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageSelector onImage={onImage} />
      </View>
      <View style={styles.formContainer}>
        <Input
          placeholder="Your name"
          placeholderTextColor={theme.colors.textColor}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) =>
            onHandlerInputChange({ value: text, name: "name" })
          }
          value={formState.name.value}
          error={formState.name.error}
          touched={formState.name.touched}
          hasError={formState.name.hasError}
          color={theme.colors.textColor}
        />
        <Input
          placeholder="Your last name"
          placeholderTextColor={theme.colors.textColor}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) =>
            onHandlerInputChange({ value: text, name: "lastName" })
          }
          value={formState.lastName.value}
          error={formState.lastName.error}
          touched={formState.lastName.touched}
          hasError={formState.lastName.hasError}
          color={theme.colors.textColor}
        />
        <Input
          placeholder="email@gmail.com"
          placeholderTextColor={theme.colors.textColor}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) =>
            onHandlerInputChange({ value: text, name: "email" })
          }
          value={formState.email.value}
          error={formState.email.error}
          touched={formState.email.touched}
          hasError={formState.email.hasError}
          color={theme.colors.textColor}
        />
        <Input
          placeholder="***********"
          placeholderTextColor={theme.colors.textColor}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) =>
            onHandlerInputChange({ value: text, name: "password" })
          }
          value={formState.password.value}
          error={formState.password.error}
          touched={formState.password.touched}
          hasError={formState.password.hasError}
          color={theme.colors.textColor}
        />
        <Button
          title="Register"
          onPress={onHandleRegister}
          disabled={!formState.isFormValid}
        ></Button>
      </View>
    </View>
  );
};

export default Register;
