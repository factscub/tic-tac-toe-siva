import React from 'react'
import { Wrapper } from './PageHeaderText.style'


export const PageHeaderText = ({props}) => {
  return (
    <Wrapper {...props}>{props.text}</Wrapper>
  )
}
