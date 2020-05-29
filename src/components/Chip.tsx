import React, { FC, ReactElement } from "react";
import { View, Text, Image, ImageRequireSource } from "react-native";
import styled from "styled-components";

export interface IChip {
  image?: ImageRequireSource;
  name: string;
  color: string;
}

/**
 * @description Chip to display image and title
 */
const Chip: FC<IChip> = ({ image, name, color }: IChip): ReactElement => {
  return (
    <Container color={color}>
      {image && <Logo source={image} resizeMode="contain"/>}
      <Title>{name}</Title>
    </Container>
  );
};

interface IContainer {
  readonly color: string;
}
const Container = styled(View)<IContainer>`
  background-color: ${(props) => props.color};
  border: 1px solid rgba(150, 150, 150, 0.2);
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  /* border: 1px solid green; */
`;
const Logo = styled(Image)`
  width: 30%;
  height: 70%;
  margin-left: 10px;
  /* border: 1px solid orange; */
`;
const Title = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0 10px;
`;

export default Chip;
