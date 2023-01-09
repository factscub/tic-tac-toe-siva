import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardHeadingStyles } from '../../Constants/HomeData/CardHeadingStyles'
import { getDateFormat } from '../../Helpers/GetDateFormat'
import { Button } from '../Button/Button'
import { PageHeaderText } from '../PageHeaderText/PageHeaderText'
import { Wrapper, DescriptionWrapper, DateWapper } from './GameDetailsCard.style'

export const GameDetailsCard = ({ game, username, url }) => {

    const navigate = useNavigate()

    const [opponent, setOpponent] = useState();
    const [description, setDescription] = useState([])
    const [btnText, setBtnText] = useState()

    // sets the opponent player name
    useEffect(() => {
        if (username === game.usernames[0]) {
            setOpponent(game.usernames[1])
        }
        else {
            setOpponent(game.usernames[0])
        }

    }, [username, game])

    // set appropriate description for the gamedetails card
    useEffect(() => {
        if (!game.winner) {
            if (username === game.playerTurn) {
                setDescription([`${opponent} just made their move!`, "It's your turn to play now."])
                setBtnText('Play!')
            }
            else {
                setBtnText('View game')
                setDescription(["You've made your move!", "Waiting for them."])
            }
        }
        else {
            if (username === game.winner) {
                setDescription(['You won!', ''])
            }
            else if (game.winner === 'DRAW') {
                setDescription(["It's a Draw!", ''])
            }
            else {
                setDescription(['You lost!', ''])
            }
            setBtnText('View game')

        }
    }, [game, opponent])


    // this method is called when we press game details card button
    // and navigates to the gameboard page
    function gotoPage() {

        navigate(url, {
            state: {
                roomId: game._id,
            }
        })

    }
    return (
        <Wrapper >
            <PageHeaderText props={{ ...CardHeadingStyles, text: `Game with ${opponent}` }} />

            <DescriptionWrapper>
                {
                    description && <>
                        <p>{description[0]}</p>
                        <p>{description[1]}</p>
                    </>
                }
            </DescriptionWrapper>
            <DateWapper>{getDateFormat(game.updatedAt)}</DateWapper>
            <Button width={'295px'} bgColor={'#F2C94C'} callback={gotoPage} btnText={btnText} />
        </Wrapper>
    )
}
