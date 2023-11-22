import { TextProps as TextPropsNative } from "react-native/types";
import { ContainerText } from "./text.style";
import { textTypes } from "./textType";
import { useMemo } from "react";

interface TextProps extends TextPropsNative {
    color?: string;
    type?: string;
}

const Text = ({ color, type, ...props }: TextProps) => {
    const FontSize = useMemo(() => {
        switch (type) {
            case textTypes.TITLE_BOLD:
            case textTypes.TITLE_REGULAR:
            case textTypes.TITLE_LIGHT:
                return '24px'
            case textTypes.SUB_TITLE_BOLD:
            case textTypes.SUB_TITLE_REGULAR:
            case textTypes.SUB_TITLE_LIGHT:
                return '20px'
            case textTypes.BUTTOM_BOLD:
            case textTypes.BUTTOM_REGULAR:
            case textTypes.BUTTOM_LIGHT:
                return '18px'
            case textTypes.PARAGRAPH_BOLD:
            case textTypes.PARAGRAPH_REGULAR:
            case textTypes.PARAGRAPH_LIGHT:
                return '14px'
            case textTypes.PARAGRAPH_SMALL_BOLD:
            case textTypes.PARAGRAPH_SMALL_REGULAR:
            case textTypes.PARAGRAPH_SMALL_LIGHT:
                return '10px'
            default:
                return '14px'
        }
    }, [type])

    const FontFamily = useMemo(() => {
        switch (type) {
            case textTypes.TITLE_BOLD:
            case textTypes.SUB_TITLE_BOLD:
            case textTypes.PARAGRAPH_BOLD:
            case textTypes.BUTTOM_BOLD:
            case textTypes.PARAGRAPH_SMALL_BOLD:
                return 'Poppins-Bold'
            case textTypes.TITLE_REGULAR:
            case textTypes.SUB_TITLE_REGULAR:
            case textTypes.PARAGRAPH_REGULAR:
            case textTypes.BUTTOM_REGULAR:
            case textTypes.PARAGRAPH_SMALL_REGULAR:
                return 'Poppins-Regular'
            case textTypes.TITLE_LIGHT:
            case textTypes.SUB_TITLE_LIGHT:
            case textTypes.PARAGRAPH_LIGHT:
            case textTypes.BUTTOM_LIGHT:
            case textTypes.PARAGRAPH_SMALL_LIGHT:
                return 'Poppins-Light'
            default:
                return 'Poppins-Regular'
        }
    }, [type])

    return <ContainerText fontFamily={FontFamily} fontSize={FontSize} color={color} {...props} />
};

export default Text;