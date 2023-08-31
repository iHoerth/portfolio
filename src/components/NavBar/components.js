import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import { IconButton, Drawer } from '@mui/material';

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  ${({ scrolled, theme }) =>
    scrolled &&
    `
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
  rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  background-color: ${theme.card_light_translucent};
  `}
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

export const NavContainer = styled.div`
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

export const NavLogo = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
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

export const MobileIcon = styled(IconButton)`
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

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    gap: 16px;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
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

export const GithubButton = styled.a`
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
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
    transition: 0.2s;
  }

  @media screen and (max-width: 768px) {
    padding: 0px 14px;
    width: 120px;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
`;

export const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.card_translucent,
    color: theme.text_light,
    width: '260px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    padding: '30px',
    gap: '20px',
  },
  '@media (max-width: 360px)': {
    '& .MuiPaper-root': {
      width: '80%',
    },
  },
}));
