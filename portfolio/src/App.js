import './App.css';
import styled from 'styled-components';


import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  position: relative;
`;


const Body = styled.div` 
  background-color: black;
  color: white;
  width: 100%;
  padding-top: 14vh;
 
`

function App() {
  return (
    <Container>
      <Header />
      <Body>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </Body>
    </Container>
  );
}

export default App;
