import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';

import { darkTheme } from './utils/themes';
import './App.css';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73 deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
    linear-gradient(141.27 deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Body>
          <NavBar />
          <Header />
          <Wrapper>
            <Skills />
          </Wrapper>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
