import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowButton } from '../../Components/ArrowButton/ArrowButton'
import { PageHeader } from '../../Components/FormContainer/FormContainer.style'
import { PageHeaderText } from '../../Components/PageHeaderText/PageHeaderText'
import cross from '../../Assets/cross.png'
import { Button } from '../../Components/Button/Button'
import { GameBoardPageHeading } from '../../Constants/GameBoardPage/GameBoardPageHeading'
import { GameBoardPageSymbol } from '../../Constants/GameBoardPage/GameBoardPageSymbol'
import { getWinner } from '../../Helpers/GetWinner'
import { GameBoardContext } from '../../Context/GameBoardContext/GameBoardContext'
import {
    setClicked,
    setOpponent,
    setDescription,
    setBtnText,
    setDisableBtn,
    setPlayerTurn,
    setUsername,
    setGame,

} from '../../Context/GameBoardContext/GameBoardActions'
import { SocketContext } from '../../Context/SocketContext/SocketContext'
import { GameBoard } from '../../Components/GameBoard/GameBoard'
import { Description } from '../../Components/Description/Description'
import { PlayerSymbol } from '../../Components/PlayerSymbol/PlayerSymbol'


export const GameBoardPage = ({ previousUrl }) => {

    const { clicked,
        opponent,
        btnText,
        username,
        disableBtn,
        playerTurn,
        description,
        game,
        dispatch } = useContext(GameBoardContext)

    const { state: { roomId } } = useLocation()
    const { socket } = useContext(SocketContext)


    // NOTE: for simplicity i used multiple useEffect to avoid confusion

    /*

    this useeffect is useful in joining the room 
    and fetches the gamedetails based on the room id

    */
    useEffect(() => {
        function callback(err, data) { }
        socket.emit('joinGame', { roomId }, callback)

    }, [])


    /**
      gets combinedId that is formed from both users emails 
      and username stored in localstorage
     */
    useEffect(() => {
        // setCombinedId(localStorage.getItem('combinedId'))
        dispatch(setUsername(JSON.parse(localStorage.getItem('user'))['username']))
    }, [])


    // sets text of the  opponent player of this game
    useEffect(() => {
        if (username === game.usernames[0]) {
            dispatch(setOpponent(game.usernames[1]))
        }
        else {
            dispatch(setOpponent(game.usernames[0]))
        }

    }, [username, game])


    /*
    sets the text to be dipalyed above the game board
    and changes button type below the game board
    */

    useEffect(() => {

        if (!game.winner) {
            if (username === game.playerTurn) {
                dispatch(setDescription('Your move'))
                dispatch(setBtnText('submit'))
                dispatch(setDisableBtn(false))

            }

            if (opponent == game.playerTurn) {
                dispatch(setDescription('Their move'))
                dispatch(setBtnText('Waiting for ' + opponent))
                dispatch(setDisableBtn(true))
            }


        }
        else {
            if (username === game.winner) {
                dispatch(setDescription('You won!'))
            }
            else if (game.winner === 'DRAW') {
                dispatch(setDescription("It's a Draw!"))
            }
            else {
                dispatch(setDescription('You lost!'))

            }
            dispatch(setBtnText('Start another game'))
            dispatch(setDisableBtn(false))
            dispatch(setClicked(true))


        }

    }, [game, opponent, username])


    /*

    this method is called when we clicked one of the box of game board
    and sets the username in the gameboard array for that index
    
    */

    function onBoardPieceClick(i) {

        const tempArray = [...game.gameBoard]
        if (tempArray[i] === username) {
            return
        }
        else if (tempArray[i]) {
            return
        }
        else {

            tempArray[i] = username
            dispatch(setClicked(true))
            dispatch(setPlayerTurn(opponent))

            dispatch(setGame({
                ...game,
                // playerTurn: opponent,
                gameBoard: [...tempArray]
            }))
        }


    }


    /* 

    This method is called when we click the button below the game board
    and sends the updated game data to the socket 

     */

    function onBoardSubmit() {

        if (clicked) {
            //  if all the indices are filled then returns false
            const draw = game.gameBoard.every((e, i) => {
                return !!e
            })

            // Bug: draw variables just returns true if all 
            // fields are filled 
            const winner = draw ? 'DRAW' : getWinner({ game, usernames: [username, opponent] })

            function callback(err, data) { }

            // helps in switching the playerturn and sends updated game data to the socket
            socket.emit('playerTurn', { roomId, data: { ...game, playerTurn, winner } }, callback)

        }
    }


    /*******************     SOCKET EVENTS    ************************* */

    // gets the updated game data the contains the updated playerturn 
    socket.on('playerTurn', (data) => {
        dispatch(setGame(data))
        dispatch(setClicked(false))

    })

    // gets the game data 
    socket.on('joinGame', (data) => {
        dispatch(setGame(data))
    })

    /**********************   SOCKET EVENTS END    *********************** */


    return (
        <div className='gameboardpage' style={{ textAlign: 'left' }}>
            <ArrowButton url={previousUrl} />
            <PageHeader>
                <PageHeaderText props={{ ...GameBoardPageHeading, text: 'Game with ' + opponent }} />
                <PageHeaderText props={GameBoardPageSymbol} />
                <PlayerSymbol symbol={cross} />
            </PageHeader>
            <Description text={description} />

            <GameBoard game={game.gameBoard}
                username={username}
                callback={(game.playerTurn !== username || clicked) ? null : onBoardPieceClick} />

            <Button callback={onBoardSubmit}
                width={'100%'}
                margin={'10px auto'}
                bgColor={disableBtn ? '#E0E0E0' : '#F2C94C'}
                btnText={btnText}
                disabled={disableBtn}
                url={!!game.winner ? previousUrl : null}
            />
        </div>
    )
}



