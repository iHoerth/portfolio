import { useState, useEffect } from 'react';
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <NavLogo to="/">
          <Span>Portfolio</Span>
        </NavLogo>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>

        <MobileIcon onClick={() => setOpen(!open)}>
          <MenuIcon fontSize="large" sx={{ color: 'white' }} />
        </MobileIcon>

        <MobileDrawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <MobileNavLink onClick={() => setOpen(!open)} href="#about">
            About
          </MobileNavLink>
          <MobileNavLink onClick={() => setOpen(!open)} href="#skills">
            Skills
          </MobileNavLink>
          <MobileNavLink onClick={() => setOpen(!open)} href="#projects">
            Projects
          </MobileNavLink>
          <MobileNavLink href="#contact">Contact</MobileNavLink>
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
