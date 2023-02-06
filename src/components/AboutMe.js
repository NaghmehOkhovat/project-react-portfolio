/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper } from './styles/Wrappers';

const AboutMe = () => {
  return (
    <BlockSection>
      <InnerWrapper>
        <Paragraph>
          <Line />
          <Dot />  I am frontend developer and my purpose is to help build websites for people and
                companies all over the world even if I am based in Stockholm.
                I have a master in child and youth studies and over the past 6 years
                I have worked as a job coach and student counselor.
                My portfolio will represent all I will learn about coding and all the projects I have already done.
        </Paragraph>
      </InnerWrapper>
    </BlockSection>
  );
};

export default AboutMe;

const Line = styled.span`
  border: 1px solid #fa382f;
  width: 40px;
  display: inline-block;
  margin-bottom: 4px;
`;
const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: #fa382f;
  border-radius: 50%;
  display: inline-block;
`;

const Paragraph = styled.p`
  line-height: 1.6;
`;