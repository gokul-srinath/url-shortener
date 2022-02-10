
import { useState } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
 
`

function App() {

  const [trigger,setTrigger] = useState(false);

  return (
    <Container>
      <Header/>
      <Form setTrigger = {setTrigger} />
      <Table trigger = {trigger} />
    </Container>
  );
}

export default App;
