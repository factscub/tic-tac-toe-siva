import React from 'react'
import { BoardPiece } from '../BoardPiece/BoardPiece'
import { Wrapper } from './GameBoard.style'

export const GameBoard = ({ game, callback,username }) => {
    return (
        <Wrapper>
            {
                game.map((e, i) => (
                    <BoardPiece key={i}
                        element={e} index={i}
                        username={username}
                        callback={callback} />
                ))
            }
        </Wrapper>
    )
}
