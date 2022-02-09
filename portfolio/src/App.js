import './App.css';
import styled from 'styled-components';

import Header from './components/Header';

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
`;


const Body = styled.div` 
background-color: black;
  color: white;
  min-height: 100vh;
  padding-top: 14vh;

  hr{
    border: none;
    background-color: #03989E;
    height: 1px;
    width: 100%;
  }
`

function App() {
  return (
    <Container>
      <Header />
      <Body>
        <hr />
      </Body>
    </Container>
  );
}

export default App;
