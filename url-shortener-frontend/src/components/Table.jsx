import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'



const Container = styled.div`

`
const TableContainer = styled.table`

`
const THeadData = styled.th`
    
`
const TBody = styled.tbody`
    
`
const THead = styled.thead`
    
`

const TRow = styled.tr`
    
`

const TData = styled.td`
    
`
const Link = styled.a`
    
`

const Table = () => {

    const {isLoading, data:urls, error} = useQuery('datas', ()=>{
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
                        <TData><Link href={`http://localhost:8080/${url.short}`}>{url.short}</Link></TData>
                        <TData>{url.clicks}</TData>
                    </TRow>);
                })}
            </TBody>
        </TableContainer>
    </Container>
  )
}

export default Table