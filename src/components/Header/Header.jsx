import { Bio } from '../../data/constants';
import TypewriterComponent from 'typewriter-effect';
import profilePicture from '../../image/profile.png';

import {
  HeaderContainer,
  Background,
  TextLoop,
  LeftSection,
  RightSection,
  Span,
  InnerContainer,
  Title,
  SubTitle,
  ResumeButton,
  Img,
} from './components';

const Header = () => {
  return (
    <HeaderContainer id="about">
      {/* <Background></Background> */}

      <InnerContainer>
        <LeftSection>
          <Title>
            Hi, I am <br />
            {Bio.name}
          </Title>
          <TextLoop>
            I am a
            <Span>
              <TypewriterComponent
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                  pauseFor: 1000,
                  delay: 20,
                  deleteSpeed: 20,
                }}
              />
            </Span>
          </TextLoop>
          <SubTitle>{Bio.description}</SubTitle>
          <ResumeButton href={Bio.resume_eng} target="_blank">
            Check resume
          </ResumeButton>
        </LeftSection>

        <RightSection>
          <Img src={profilePicture} alt="Profile Picture"></Img>
        </RightSection>
      </InnerContainer>
    </HeaderContainer>
  );
};

export default Header;
