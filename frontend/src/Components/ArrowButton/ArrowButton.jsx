import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from './ArrowButton.style'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'

export const ArrowButton = ({url}) => {
    const navigate = useNavigate()
  return (
    <Wrapper ><MdOutlineKeyboardArrowLeft className='icon' fill='black' size={'2em'} onClick={()=>navigate(url)}/></Wrapper>
  )
}
