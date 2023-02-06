/* eslint-disable no-tabs */
/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
import { LinkedInSvg, GitHubSvg, StackSvg } from 'components/Icons';
import { InnerWrapper } from './styles/Wrappers';
import BackgroundVideo from '../assets/img.jpg'
import profileImg from '../assets/NaghmehPicture.jpg';

const Header = () => {
  return (
    <HeaderBackground>
      <InnerWrapper>
        <HeaderImagesWrapper>
          <LinksWrapper>
            <Link>
              <a
                href="https://www.linkedin.com/in/naghmeh-okhovat-92508378/"
                role="button"
                aria-pressed="false"
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer">
                <div>
                  <LinkedInSvg />
                </div>
              </a>
            </Link>
            <Link>
              <a
                href="https://github.com/NaghmehOkhovat"
                role="button"
                aria-pressed="false"
                aria-label="github"
                target="_blank"
                rel="noreferrer">
                <div>
                  <GitHubSvg />
                </div>
              </a>
            </Link>
            <Link>
              <a
                href="https://stackoverflow.com/users/19384811/naghmeh-okhovat"
                role="button"
                aria-pressed="false"
                aria-label="StackOverflow"
                target="_blank"
                rel="noreferrer">
                <div>
                  <StackSvg />
                </div>
              </a>
            </Link>
          </LinksWrapper>
          <ProfileImage src={profileImg} alt="Naghmeh Okhovat" />
        </HeaderImagesWrapper>
        <HeaderInfo>
          <p>
            Portfolio: <span>Naghmeh Okhovat</span>
          </p>
          <h1>frontend developer</h1>
          <h2>
            <span>with a background in social working and job coaching</span>
          </h2>
        </HeaderInfo>
      </InnerWrapper>
    </HeaderBackground>
  );
};

export default Header;

const HeaderBackground = styled.header`
  position: relative;
  background-image: linear-gradient(
      rgba(11, 11, 11, 0.6),
      rgba(11, 11, 11, 0.6)
    ),
    url(${BackgroundVideo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 70vh;
  width: 100%;
  @media (min-width: 768px) {
    height: 80vh;
  }
  @media (min-width: 1024px) {
  }
`;

const HeaderInfo = styled.div`
  position: absolute;
  left: 0;
  top: 7em;
  color: white;
  font-size: 1em;
  max-width: 60%;
  h1 {
    color: black;
  }
  h2 {
  }
  p {
  }
  span {
    font-weight: lighter;
  }
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
  @media (min-width: 1024px) {
    font-size: 1.2em;
  }
`;
const HeaderImagesWrapper = styled.div``;

const ProfileImage = styled.img`
  width: 10em;
  max-width: 200px;
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: -2rem;
  @media (min-width: 768px) {
    width: 15em;
  }
  @media (min-width: 1024px) {
    width: 20em;
  }
`;

const LinksWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 10px;
`;

const Link = styled.div`
  margin-top: 2em;
  & div {
    color: white;
    border: 2px solid white;
    border-radius: 50%;
    padding: 0.65rem 0.78rem;
  }
  @media (min-width: 768px) {
    img {
      height: 4em;
      width: 4em;
    }
  }
  @media (min-width: 1024px) {
    img {
      height: 4.2em;
      width: 4.2em;
    }
  }
`;

// export const Header = styled.header`
// top: 0;
// right: 0;
// left: 0;
// margin: 0 auto;
// width: 100%;
// max-height: 200px;
// background-color: rgba(240, 245, 240, 0.5);
// display: flex;
// flex-direction: column;

// > .portfolio {
// 	position: absolute;
// 	border: 2px solid white;
// 	width: 30vh;
// 	height: 30vh;
// 	left: 50%;
// 	top: 37vh;
// 	border-radius: 50%;
// 	object-fit: cover;
//  }

//  > video {
// 	position: absolute;
// 	top: 0;
// 	right: 0;
// 	width: 100%;
// 	object-fit: cover;
// 	height: 520px;
// 	left: 0px;
// 	top: 0px;
// 	z-index: -1;
// }
// `;