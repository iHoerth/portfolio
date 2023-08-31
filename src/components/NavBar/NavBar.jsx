import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Bio } from '../../data/constants';

import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavItems,
  NavLink,
  ButtonContainer,
  GithubButton,
  Span,
  MobileDrawer,
  MobileNavLink,
} from './components';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <Span>Portfolio</Span>
        </NavLogo>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>

        <MobileIcon onClick={() => setOpen(!open)}>
          <MenuIcon fontSize="large" sx={{ color: 'white' }} />
        </MobileIcon>

        <MobileDrawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <MobileNavLink onClick={() => setOpen(!open)} href="#about">About</MobileNavLink>
          <MobileNavLink onClick={() => setOpen(!open)} href="#skills">Skills</MobileNavLink>
          <MobileNavLink onClick={() => setOpen(!open)} href="#projects">Projects</MobileNavLink>
          <MobileNavLink href="#experience">Experience</MobileNavLink>
          <MobileNavLink href="#education">Education</MobileNavLink>
        </MobileDrawer>

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
