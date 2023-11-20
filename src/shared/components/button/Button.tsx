import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ContainerButton } from "./button.style";
import  Text  from "../text/Text";
import { theme } from "../../theme/theme";
import { textTypes } from "../text/textType";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
}

const Button = ({ title, margin, ...props }: ButtonProps) => {
    return (
        <ContainerButton margin={margin} {...props} >
            <Text color={theme.colors.neutralTheme.white}>{title}</Text>
        </ContainerButton >
    )
};

export default Button;