import React from "react";
import styled from "styled-components";
import { View, Text, Image } from "react-native";
import Card from "@components/Card";

const Home = () => {
  return (
    <Container>
      {/* title */}
      <TitleBar>
        <Avatar source={require('@assets/avatar.jpg')} />
        <TitleBarContent>
          <Title>Hello home</Title>
          <Name>Javier Llerenas</Name>
        </TitleBarContent>
        <Icon></Icon>
      </TitleBar>

      {/* tech carousel */}


      {/* continue learning */}
      <Container>
        <Subtitle>Continue Learning</Subtitle>
        <Card />
      </Container>
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  /* align-items: center;
  justify-content: center; */
`;

const TitleBar = styled(View)`
  width: 100%;
  margin-top: 50px;
  padding: 0px 20px 0px;
  flex-direction: row;
  align-items: center;
`;

// first
const Avatar = styled(Image)`
  width: 40px;
  height: 40px;
`;

// second
const TitleBarContent = styled(View)`
  flex: 3;
  border: 1px solid orange;
`;

const Title = styled(Text)`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled(Text)`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

// third
const Icon = styled(View)`
  width: 40px;
  height: 40px;
`;

// Card Carousel
const Subtitle = styled(Text)`
  color: #b8bece;
  font-size: 15px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

export default Home;
