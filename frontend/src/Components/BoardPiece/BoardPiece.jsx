import React, { useEffect, useState } from 'react'
import { Wrapper } from './BoardPiece.style'

import cross from '../../Assets/cross.png'
import circle from '../../Assets/circle.png'
import { Symbol } from '../Symbol/Symbol'

export const BoardPiece = ({ element, index, username, callback }) => {

  const [icon, setIcon] = useState('')

  // sets the correct icon based on username and element
  useEffect(() => {
    if (element === username) {
      setIcon(cross)
    }
    else if (element) {
      setIcon(circle)

    }
    else {
      setIcon(null)
    }

  }, [element, username,cross, circle])


  return (
    <Wrapper onClick={() => callback ? callback(index) : null}>
      {icon && <Symbol symbol={icon}/>}
    </Wrapper>
  )
}
