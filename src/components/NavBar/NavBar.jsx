import { useState } from 'react';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Drawer, List } from '@mui/material';
import { withTheme } from 'styled-components';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  color: ${({ theme }) => theme.text_light};
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;

  &:visited {
    color: ${({ theme }) => theme.text_primary};
  }

  @media screen and (max-width: 640px) {
    padding: 0px;
  }
`;

const MobileIcon = styled(IconButton)`
  && {
    display: none;
    align-self: center;
    @media screen and (max-width: 640px) {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      top: 0;
      right: 0;
      font-size: 1.5rem;
      cursor: pointer;
      color: ${({ theme }) => theme.text_primary};
    }
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  margin: 0px 0px 0px 8px;
  padding: 0px 6px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GithubButton = styled.button`
  background-color: transparent;
  border: 1.8px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  width: 150px;
  align-items: center;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_light};
    transition: 0.2s;
  }

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_light};
`;

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.card_light,
    color: theme.text_light,
    width: '200px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

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

        <MobileDrawer
          PaperProps={({ theme }) => ({
            sx: {
              width: '200px',
            },
          })}
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
        >
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#education">Education</NavLink>
        </MobileDrawer>

        <ButtonContainer>
          <GithubButton>Github Profile</GithubButton>
        </ButtonContainer>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
