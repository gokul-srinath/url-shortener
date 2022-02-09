import styled from "styled-components";
import React, { useState } from 'react';

const Container = styled.div`

`

const FormContainer = styled.form`
    
`
const Input = styled.input`
    
`
const Button = styled.button`
    
`


const Form = () => {
    const [url,setUrl] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(url);
    }

    const handleChange = (e) =>{
        setUrl(e.target.value)
    }
  return (
    <Container>
        <FormContainer onSubmit={handleSubmit}>
            <Input type="url" placeholder="Enter URL..." name="url" value={url} onChange={handleChange}/>
            <Button type="submit">Shrink</Button>
        </FormContainer>
    </Container>
  )
}

export default Form;