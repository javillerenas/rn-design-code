import React from "react";
import styled from "styled-components";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Card, { ICard } from "@components/Card";
import Chip from "@components/Chip";
import { Ionicons } from "@expo/vector-icons";
/** import mock data */
import { continueLearningCards } from "@constants/data/data";

const chipData = [
  {
    name: "figma",
    color: "white",
    image: require("@assets/logo-figma.png"),
  },
  {
    name: "framer x",
    color: "white",
    image: require("@assets/logo-framerx.png"),
  },
  {
    name: "sketch",
    color: "white",
    image: require("@assets/logo-sketch.png"),
  },
  {
    name: "vue",
    color: "white",
    image: require("@assets/logo-vue.png"),
  },
];

const Home = () => {
  return (
    <RootView>
      <SafeAreaView>
        <ScrollView style={{ height: "100%"}}>
          {/* title */}

          <TitleBar>
            <Avatar source={require("@assets/avatar.jpg")} />
            <TitleBarContent>
              <Title>Welcome back,</Title>
              <Name>Javier Llerenas</Name>
            </TitleBarContent>
            <Ionicons name="ios-notifications" size={32} color="#4775f2" />
          </TitleBar>

          {/* tech section */}
          <Section>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ paddingLeft: 20, paddingBottom: 20}}
            >
              {chipData.map((props: any, index: number) => (
                <ChipWrapper key={index}>
                  <Chip {...props} />
                </ChipWrapper>
              ))}
            </ScrollView>
          </Section>

          {/* continue learning */}
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom: 30}}>
            {continueLearningCards.map((props: ICard, index: number) => (
              <Card {...props} key={index} />
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </RootView>
  );
};

const RootView = styled(View)`
  flex: 1;
`;

// TOP CONTENT
const TitleBar = styled(View)`
  margin-top: 20px;
  padding: 0px 20px 0px;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;

const TitleBarContent = styled(View)`
  flex: 3;
  height: 40px;
  margin-left: 10px;
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

// TECH SECTION
const Section = styled(View)`
  margin: 40px 0 0;
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ChipWrapper = styled(View)`
  max-width: 150px;
  height: 100%;
  margin-right: 20px;

  &:last-child {
    border: 1px solid green;
  }
`;

// Card Carousel
const Subtitle = styled(Text)`
  color: #b8bece;
  font-size: 15px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
  height: 30px;
`;

export default Home;
