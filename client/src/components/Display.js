import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
`
const Box = styled.div`
    border: 1px solid black;
    width: 5rem;
    margin-left: 1rem;
`

export default function Display(props) {
    const { ball, strike } = props.display
    return (
        <Wrapper>
            <Box>Balls : {ball}</Box>
            <Box>Strikes : {strike}</Box>
        </Wrapper>
    )
}