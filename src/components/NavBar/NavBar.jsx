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
} from './navbarStyles';

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
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#education">Education</NavLink>
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
