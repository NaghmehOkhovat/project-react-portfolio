/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-len */
/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
import {
  BlockSectionWhite,
  InnerWrapper,
  List,
  Content
} from './styles/Wrappers';
import articleImg from '../assets/myThoughts.jpg';

const Articles = () => {
  return (
    <BlockSectionWhite>
      <InnerWrapper>
        <h3>My thoughts</h3>
        <List>
          <ClonedContent>
            <a
              href="https://medium.com/@naghmeh.o88/where-am-i-28c5b93fe4f3"
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
              aria-hidden>
              <img src={articleImg} alt="project img" />
              <h5>Oct 14, 2022</h5>
              <h6>I am here! Here in a very new world!</h6>

              <p>
							I have really enjoyed to work with people and always tried to encourage people,
							 to follow what they want. But how many people are able to find out about their own desires in life...
							  <span>{'>>'}</span>
              </p>
            </a>
          </ClonedContent>
        </List>
      </InnerWrapper>
    </BlockSectionWhite>
  );
};

export default Articles;

const ClonedContent = styled(Content)`
  margin: 50px 0;
  box-sizing: border-box;
  h5 {
    font-weight: lighter;
  }
  a {
    underline: none;
  }
  img {
    width: 100%;
  }
  span {
    color: #fa382f;
    font-weight: bolder;
  }
  span:hover {
    color: white;
  }
`;