import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const Section = styled.section`
  background-color: #2d2d3a;
  color: #7d7d80;
  border-top: solid 2px #fb8122;
  padding: 20px 25px;
  width: 500px;
  box-shadow: 0px 2px 3px rgba(255, 255, 255, 0.3);
`;

function App() {
  return (
    <Container>
      <Section>Lala</Section>
    </Container>
  );
}

export default App;
