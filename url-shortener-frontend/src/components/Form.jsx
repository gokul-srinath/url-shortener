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

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const data = await fetch("http://localhost:8080/create",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({url:url})
        }).then(res => res.json());

        console.log(data);
        
    }

    const handleChange = (e) =>{
        setUrl(e.target.value)
    }
  return (
    <Container>
        <FormContainer onSubmit={handleSubmit}>
            <Input type="url" placeholder="Enter URL..." name="url" value={url} onChange={handleChange} required/>
            <Button type="submit">Shrink</Button>
        </FormContainer>
    </Container>
  )
}

export default Form;