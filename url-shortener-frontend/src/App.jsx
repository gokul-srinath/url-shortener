
import { useState } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import Table from "./components/Table";

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
 
`

function App() {

  const [trigger,setTrigger] = useState(false);

  return (
    <Container>
      <Form setTrigger = {setTrigger} />
      <Table trigger = {trigger} />
    </Container>
  );
}

export default App;
