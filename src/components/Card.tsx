import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";

const Card = () => {
  return (
    <Container>
      <Cover>
        <ImageX source={require("@assets/background2.jpg")} />
        <Title>Styled Components</Title>
      </Cover>
      <Content>
        <Logo source={require("@assets/logo-react.png")} />
        <ContentText>
          <Subtitle>React Native</Subtitle>
          <Caption>5 of 12 Sections</Caption>
        </ContentText>
      </Content>
    </Container>
  );
};
export default Card;

const Container = styled(View)`
  width: 315px;
  height: 280px;
  background: white;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled(View)`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const ImageX = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Title = styled(Text)`
  position: absolute;
  top: 20;
  left: 20;
  color: white;
  font-size: 25px;
  font-weight: 600;
`;

// second part

const Content = styled(View)`
  flex: 1;
  flex-direction: row;
  padding: 0 10px;
  align-items: center;
  margin-top: -5px;
`;

const Logo = styled(Image)`
  width: 45px;
  height: 45px;
`;

const ContentText = styled(View)`
  flex: 1;
  margin-left: 10px;
`;

const Subtitle = styled(Text)`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Caption = styled(Text)`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
`;
