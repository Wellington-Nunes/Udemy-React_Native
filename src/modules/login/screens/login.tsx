import { View, Text } from "react-native";
import { ContainerLogin } from "./styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";

const Login = () => {

  const handleOnPress = () => {
    console.log('Aopa');
  }

  return (
    <View>
      <ContainerLogin>
        <Text> Login </Text>
        <Input placeholder="E-mail"/>
        <Input />
        <Button title="ENTRAR" onPress={handleOnPress} />
      </ContainerLogin>
    </View>
  );
};

export default Login;