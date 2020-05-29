import React, { FC, ReactElement } from "react";
import { View, Text, Image, ImageRequireSource } from "react-native";
import styled from "styled-components";

export interface ICourse {
  background: ImageRequireSource;
  logo?: ImageRequireSource;
  avatar: ImageRequireSource;
  title: string;
  subtitle: string;
  author: string;
  description: string;
}

/**
 * @description Course to display image and title
 */
const Course: FC<ICourse> = ({
  background,
  logo,
  avatar,
  title,
  subtitle,
  author,
  description,
}: ICourse): ReactElement => {
  return (
    <Container>
      <Cover>
        <BackImage source={background} />
        {logo && <Logo source={logo} resizeMode="contain" />}
        <Subtitle>{subtitle.toUpperCase()}</Subtitle>
        <Title>{title}</Title>
      </Cover>
      <Body>
        <Avatar source={avatar} />
        <Content>
          <Description>{description}</Description>
          <Author>Taught by {author}</Author>
        </Content>
      </Body>
    </Container>
  );
};
export default Course;

const Container = styled(View)`
  width: 90%;
  height: 335px;
  background: white;
  margin: 10px 10px 20px;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

// Top Section
const Cover = styled(View)`
  height: 80%;
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const BackImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
const Logo = styled(Image)`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 90px;
  left: 45%;
`;
const Subtitle = styled(Text)`
  position: absolute;
  bottom: 10px;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  margin-left: 20px;
`;
const Title = styled(Text)`
  position: absolute;
  bottom: 24px;
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 20px;
  margin-left: 20px;
  width: 170px;
  font-size: 20px;
  text-transform: capitalize;
`;

// Bottom Section
const Body = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Avatar = styled(Image)`
  width: 38px;
  height: 38px;
  border-radius: 40px;
  margin-left: 20px;
`;
const Content = styled(View)`
  flex: 1;
  margin-right: 5px;
  margin-left: 10px;
`;
const Description = styled(Text)`
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
`;
const Author = styled(Text)`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;
