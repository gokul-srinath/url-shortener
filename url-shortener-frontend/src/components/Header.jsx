import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: #21acac;
    font-size: 18px;
    
`;

const Title = styled.h2`
    font-family: 'Urbanist', sans-serif;
    color: white;
    letter-spacing: 2px;
    :hover{
        transform: scale(1.1);
        transition: transform 0.2s ease-in;
    }
`;

const Header = () => {
  return (
    <Container>
        <Title>URL Shortener</Title>
    </Container>
  )
}

export default Header;