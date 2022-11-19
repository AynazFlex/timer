import styled from "styled-components";
import Timer from "./components/Timer";


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #04041f;
  font-size: 50px;
`

function App() {
  return (
    <Wrapper>
      <Timer />
    </Wrapper>
  );
}

export default App;
