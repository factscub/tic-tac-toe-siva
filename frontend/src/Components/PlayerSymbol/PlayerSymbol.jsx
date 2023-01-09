import React from 'react'
import { Symbol } from '../Symbol/Symbol'
import { Wrapper } from './PlayerSymbol.style'

export const PlayerSymbol = ({symbol}) => {
  return (
    <Wrapper >
        <Symbol symbol={symbol}/>
    </Wrapper>
  )
}
