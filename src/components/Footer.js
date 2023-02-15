import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper } from './styles/Wrappers';

const Footer = () => {
  return (
    <FooterBlockSection>
      <InnerWrapper>
        <FooterStyled>
          <h4>Contact</h4>
          <p>Naghmeh okhovat</p>
          <p>
            <a className="address-style" href="tel:+46 73 720 20 36 "> +46 73 720 20 36
            </a>
          </p>
          <p>
            <a href="mailto: naghmeh.o88@gmail.com" className="email">naghmeh.o88@gmail.com
            </a>
          </p>
        </FooterStyled>
      </InnerWrapper>
    </FooterBlockSection>
  );
};

export default Footer;

const FooterStyled = styled.div`
  color: white;
  text-align: center;
  p {
    font-family: 'Roboto', sans-serif;
    color: #2b2e34;
    font-weight: bold;
    color: white;
    text-align: center;
  }
  h4 {
    margin: 10px;
  }
`;

const FooterBlockSection = styled(BlockSection)`
  background-color: #913175;
`;
