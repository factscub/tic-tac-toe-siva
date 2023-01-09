 


// import React, { useContext, useEffect, useMemo, useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { ArrowButton } from '../../Components/ArrowButton/ArrowButton'
// import { PageHeader } from '../../Components/FormContainer/FormContainer.style'
// import { PageHeaderText } from '../../Components/PageHeaderText/PageHeaderText'
// import { GameDetailsContext } from '../../Context/GameDetailsContext/GameDetailsContext'
// import cross from '../../Assets/cross.png'
// import { BoardPiece } from '../../Components/BoardPiece/BoardPiece'
// import { Button } from '../../Components/Button/Button'
// import { socket } from '../../Socket/SocketConnection'
// import { Description, GameBoard, Img, SymbolWrapper, Wrapper } from './GameBoardPage.style'
// import { GameBoardPageHeading } from '../../Constants/GameBoardPage/GameBoardPageHeading'
// import { GameBoardPageSymbol } from '../../Constants/GameBoardPage/GameBoardPageSymbol'
// import { getWinner } from '../../Helpers/GetWinner'

// export const GameBoardPage = ({ previousUrl }) => {

//     const data = useContext(GameDetailsContext)

//     const [opponent, setOpponent] = useState();
//     const [description, setDescription] = useState()
//     const [btnText, setBtnText] = useState()
//     const [username, setusername] = useState()
//     const [clicked, setClicked] = useState()
//     const [disableBtn, setDisableBtn] = useState()
//     // const [combinedId, setCombinedId] = useState()
//     const { state: { roomId } } = useLocation()
//     const [playerTurn, setPlayerTurn] = useState()


//     const [game, setGame] = useState(() => ({
//         gameStatus: '',
//         usernames: [],
//         playerTurn: '',
//         gameBoard: Array(9).fill(null),
//         gameCreatedBy: '',
//         winner: '',
//         combinedId :''
//     }))


//     // NOTE: for simplicity i used multiple useEffect to avoid confusion

//     /*

//     this useeffect is useful in joining the room 
//     and fetches the gamedetails based on the room id

//     */
   
//     useEffect(() => {
//         function callback(err, data) { }
//         socket.emit('joinGame', { roomId }, callback)

//     }, [])


//     /**
//       gets combinedId that is formed from both users emails 
//       and username stored in localstorage
//      */
//     useEffect(() => {
//         // setCombinedId(localStorage.getItem('combinedId'))
//         setusername(JSON.parse(localStorage.getItem('user'))['username'])
//     }, [])


//     // sets text of the  opponent player of this game
//     useEffect(() => {
//         if (username === game.usernames[0]) {
//             setOpponent(game.usernames[1])
//         }
//         else {
//             setOpponent(game.usernames[0])
//         }

//     }, [username, game])


//     /*
//     sets the text to be dipalyed above the game board
//     and changes button type below the game board
//     */

//     useEffect(() => {
//         if (!game.winner) {
//             if (username === game.playerTurn) {
//                 setDescription('Your move')
//                 setBtnText('submit')
//                 setDisableBtn(false)
//             }

//             if (opponent == game.playerTurn) {
//                 setDescription('Their move')
//                 setBtnText('Waiting for ' + opponent)
//                 setDisableBtn(true)
//             }
//         }
//         else {
//             if (username === game.winner) {
//                 setDescription('You won!')
//             }
//             else if (game.winner === 'DRAW') {
//                 setDescription("It's a Draw!")
//             }
//             else {
//                 setDescription('You lost!')

//             }
//             setBtnText('Start another game')
//             setDisableBtn(false)
//             setClicked(true)


//         }
//     }, [game, opponent, username])


//     /*

//     this method is called when we clicked one of the box of game board
//     and sets the username in the gameboard array for that index
    
//     */

//     function onBoardPieceClick(i) {

//         const tempArray = [...game.gameBoard]
//         if (tempArray[i] === username) {
//             return
//         }
//         else if (tempArray[i]) {
//             return
//         }
//         else {

//             tempArray[i] = username
//             setClicked(true)
//             setPlayerTurn(opponent)

//             setGame(prev => (
//                 {
//                     ...prev,
//                     // playerTurn: opponent,
//                     gameBoard: [...tempArray]
//                 }
//             ))
//         }


//     }


//     /* 

//     This method is called when we click the button below the game board
//     and sends the updated game data to the socket 

//      */

//     function onBoardSubmit() {

//         if (clicked) {
//             //  if all the indices are filled then returns false
//             const draw = game.gameBoard.every((e, i) => {
//                 return !!e
//             })
//             const winner = draw ? 'DRAW' : getWinner({ game, usernames: [username, opponent] })

//             function callback(err, data) { }

//             // helps in switching the playerturn and sends updated game data to the socket
//             socket.emit('playerTurn', { roomId, data: { ...game, playerTurn, winner } }, callback)

//         }
//     }


//     /*******************     SOCKET EVENTS    ************************* */

//     // gets the updated game data the contains the updated playerturn 
//     socket.on('playerTurn', (data) => {
//         setGame(data)
//         setClicked(false)

//     })

//     // gets the game data 
//     socket.on('joinGame', (data) => {
//         setGame(data)
//     })

//     /**********************   SOCKET EVENTS END    *********************** */


//     return (
//         <Wrapper>
//             <ArrowButton url={previousUrl} />
//             <PageHeader>
//                 <PageHeaderText props={{ ...GameBoardPageHeading, text: 'Game with ' + opponent }} />
//                 <PageHeaderText props={GameBoardPageSymbol} />
//                 <SymbolWrapper>
//                     <Img src={cross} />
//                 </SymbolWrapper>
//             </PageHeader>
//             <Description>{description}</Description>
//             <GameBoard>
//                 {
//                     game.gameBoard.map((e, i) => (
//                         <BoardPiece key={i}
//                             element={e} index={i}
//                             username={username}
//                             callback={(game.playerTurn !== username || clicked) ?
//                                 null : onBoardPieceClick} />
//                     ))
//                 }
//             </GameBoard>

//             <Button callback={onBoardSubmit}
//                 width={'100%'}
//                 margin={'10px auto'}
//                 bgColor={disableBtn ? '#E0E0E0' : '#F2C94C'}
//                 btnText={btnText}
//                 disabled={disableBtn}
//                 url={!!game.winner ? previousUrl : null}
//             />
//         </Wrapper>
//     )
// }
