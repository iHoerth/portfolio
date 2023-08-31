import { Bio } from '../../data/constants';
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

import {
  Nav,
  NavContainer,
  NavItems,
  NavLink,
  ButtonContainer,
  SocialMediaButton,
  Title,
  Copyright,
} from './components';

const Footer = () => {
  return (
    <Nav>
      <NavContainer>
        <Title>Ignacio Hoerth</Title>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>

        <ButtonContainer>
          <SocialMediaButton href={Bio.github} target="_blank">
            <GitHub />
          </SocialMediaButton>
          <SocialMediaButton href={Bio.linkedin} target="_blank">
            <LinkedIn />
          </SocialMediaButton>
          <SocialMediaButton href={Bio.instagram} target="_blank">
            <Instagram />
          </SocialMediaButton>
          <SocialMediaButton href={Bio.twitter} target="_blank">
            <Twitter />
          </SocialMediaButton>
        </ButtonContainer>
        <Copyright>© 2023 Ignacio Hoerth. All rights reserved.</Copyright>
      </NavContainer>
    </Nav>
  );
};

export default Footer;
