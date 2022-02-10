import styled from "styled-components";
import React, { useState } from 'react';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-bottom: 30px;
    
`

const FormContainer = styled.form`
    
    margin-left: 30px;
    width: 50%;
    display: flex;
    
    height: 2.5rem;
    font-size: 16px;
    
    
`
const Input = styled.input`
    width: 100%;
    display: inline-block;
    padding: 0.25rem;
    margin-right: 2px;
    font-size: inherit;
    color: teal;
    :focus{
        outline: 0;
    }
`
const Button = styled.button`
    padding: 0.5rem 1.25rem;
    border: 0;
    background-color: #21acac;
    color: white;
    font-size: inherit;
    font-weight: bold;
    border-radius: 5px;
    :active{
        transform: translateY(2px);
    }
    
`


const Form = ({setTrigger}) => {
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

        setTrigger(prevState => !prevState)
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