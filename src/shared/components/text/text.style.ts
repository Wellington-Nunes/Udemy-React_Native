import styled from "styled-components/native";

interface ContainerTextProps {
  color?: string;
  fontSize: string;
}
export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  font-family: Poppins-Regular;
  font-size: ${(props) => props.fontSize}
`;
