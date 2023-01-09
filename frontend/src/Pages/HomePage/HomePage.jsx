import { useContext, useEffect, useState } from 'react'
import { BlackBtn } from '../../Components/BlackBtn/BlackBtn'
import { Button } from '../../Components/Button/Button'
import { GameDetailsCard } from '../../Components/GameDetailsCard/GameDetailsCard'
import { PageHeaderText } from '../../Components/PageHeaderText/PageHeaderText'
import { TextWrapper } from '../../Components/TextWrapper/TextWrapper'
import { HomeText } from '../../Constants/HomeData/HomeText'
import { SocketContext } from '../../Context/SocketContext/SocketContext'
import { sortedGameList } from '../../Helpers/SortedGameList'

export const HomePage = ({ btnText, url, HeadingText, gotoUrl }) => {


    const { socket } = useContext(SocketContext)
    const [games, setGames] = useState([])


    // NOTE: for simplicity i used multiple useEffect to avoid confusion

    /*******************     SOCKET EVENTS    ************************* */

    /*
    gets all games that matches the username
    and stores in games variable
    */
    useEffect(() => {
        function callback(err, data) {
            setGames(sortedGameList(data))
        }
        socket.emit('getAllGames', {
            username: JSON.parse(localStorage.getItem('user'))['username']
        }, callback)
    }, [])



    /*
    this socket event helps to create a unique room for this user only.
    */
    useEffect(() => {
        socket.emit('homePageRoom', { username: JSON.parse(localStorage.getItem('user'))['username'] })

    }, [])



    /*
    this event helps get latest or updated gamedetails 
    i.e, if opponent sends invitation or plays his/her turn  it will be reflected in the homwpage immediately

    */
    socket.on('notifyUser', (data) => {

        const tempArray = games.filter((game, i) => {
            return (game._id !== data._id)
        })
        setGames(sortedGameList([...tempArray, data]))
    })


    /*******************     SOCKET EVENTS    ************************* */


    return (
        <div className='homePage'>

            <PageHeaderText props={HeadingText} />
            {
                !!!games.length && <TextWrapper>
                    {
                        HomeText.map((props, i) => (
                            <PageHeaderText props={props} key={i} />
                        ))
                    }

                </TextWrapper>
            }
            {
                games && games.map((game, i) => (
                    <GameDetailsCard key={i}
                        game={game}
                        username={JSON.parse(localStorage.getItem('user'))['username']}
                        url={gotoUrl} />
                ))
            }

            {
                !!!games.length ? 
                <Button bgColor={'#F2C94C'}
                btnText={btnText}
                url={url}  />
                :
                <BlackBtn url={url} />
                
            }
        </div>
    )
}
