import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from './BlackBtn.style'

export const BlackBtn = ({url}) => {
    const navigate = useNavigate()
    return (
        <Wrapper onClick={()=>navigate(url)} >+ New Game</Wrapper>
    )
}
