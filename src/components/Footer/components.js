import styled from 'styled-components';

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: relative;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  padding: 12px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 26px;
  color: ${({ theme }) => theme.primary};
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Copyright = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const ButtonContainer = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 0.7;
  gap: 24px;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const SocialMediaButton = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.18s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.15);
    color: ${({ theme }) => theme.primary};
  }
`;