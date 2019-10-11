import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`

`
const Select = styled.select`

`

export default function Dashboard({ display, setDisplay }) {
    const [option, setOption] = useState('strike')

    const handleSubmit = () => {
        if (option === 'foul' && display.strike < 2) {
            setDisplay({...display, strike: display.strike+1})
        } else if (option === 'hit') {
            setDisplay({'ball': 0, 'strike': 0})
        } else {
          setDisplay({...display, [option]: display[option]+1 })
        }    
    }

    return (
        <div>
            <Select value={option} onChange={e => setOption(e.target.value)}>
                <option value='strike'>strike</option>
                <option value='ball'>ball</option>
                <option value='foul'>foul</option>
                <option value='hit'>hit</option>
            </Select>
            <Button onClick={() => handleSubmit()}>Submit</Button>
        </div>
    )
}