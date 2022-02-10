import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'



const Container = styled.div`
    /* border: 1px solid red;    */
    
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const TableContainer = styled.table`
    /* flex: 1; */
    width: 80vw;
    
    border-collapse: collapse;
`
const THeadData = styled.th`
    background-color: #21acac;
    color: white;
    font-size: 18px;
    padding: 1rem;
    border: 1px solid #ddd;
`
const TBody = styled.tbody`
    
`
const THead = styled.thead`
    
`

const TRow = styled.tr`
    :nth-child(even){
        background-color: #eee;
    }
`

const TData = styled.td`
    padding: 1rem;
    /* border: 1px solid #a8a6a6; */
    
`
const Link = styled.a`
    text-decoration:none;
    color: teal;
    :hover{
        text-decoration: underline;
    }
`

const Table = ({trigger}) => {

    const {isLoading, data:urls, error} = useQuery(['datas',trigger], ()=>{
       return fetch("http://localhost:8080/urls",{
           headers: {
               'Content-Type' : 'application/json'
           }
       }).then(res => res.json());
    });
    

    if (isLoading){
        <Container>
            Loading...
        </Container>
    }

    if (error){
        <Container>
            {error}
        </Container>
    }

  return (
    <Container>
        <TableContainer>
            <THead>
                <TRow>
                    <THeadData>Full URL</THeadData>
                    <THeadData>Short URL</THeadData>
                    <THeadData>Clicks</THeadData>
                </TRow>
            </THead>
            <TBody>

            
            
                {urls && JSON.parse(urls.message).map(url => {
                    return (<TRow key={url._id}>
                        <TData><Link href={url.full}>{url.full}</Link></TData>
                        <TData><Link href={`http://localhost:8080/${url.short}`} target="_blank">{url.short}</Link></TData>
                        <TData>{url.clicks}</TData>
                    </TRow>);
                })}
            </TBody>
        </TableContainer>
    </Container>
  )
}

export default Table