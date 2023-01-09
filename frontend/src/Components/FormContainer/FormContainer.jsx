import { Button } from "../Button/Button"
import { InputField } from "../InputField/InputField"
import { PageHeaderText } from "../PageHeaderText/PageHeaderText"
import { Wrapper, Form, PageHeader, MessageBox } from './FormContainer.style'
import { ArrowButton } from '../ArrowButton/ArrowButton'
import { usePostData } from "../../Api/usePostData"
import { LoginContext } from "../../Context/LoginContext/LoginContext"
import { RegisterContext } from '../../Context/RegisterContext/RegisterContext'
import { useContext, useState } from "react"
import { CreateGameContext } from "../../Context/CreateGameContext/CreateGameContext"
import { useNavigate } from "react-router-dom"
import { createCombinedId } from "../../Helpers/createCombinedId"
import { SocketContext } from "../../Context/SocketContext/SocketContext"



export const FormContainer = ({ url,
    gotoUrl,
    previousUrl,
    formDetails,
    HeadingText,
    formCaption,
    type,
    btnText } = {}) => {

    const { loading, error, data, status, postData } = usePostData()
    const [socketerr, setSocketerr] = useState()
    const navigate = useNavigate()
    const { state, dispatch } = useContext(contextType(type))
    const {socket}=useContext(SocketContext)


    // this method decides which context to be taken in to consideration depending on the type varialble.
    function contextType(type) {
        switch (type) {
            case 'Register':
                return RegisterContext
            case 'Login':
                return LoginContext
            case 'NewGame':
                return CreateGameContext

        }
    }

    /*
         this method is called when we click login, register, or create newgame button 
         and sends user details to the server 
         and fetches required data in necessary 
         Also if the user clicks the create newgame button in newgame page it will take 
         to the gameboard page if everything goes well
    
        */
    function postUserData() {

        if (type === 'NewGame') {

            // get player data from localstorage
            const { email, username } = JSON.parse(localStorage.getItem('user'))

            // create and store combined emails of both the user and opponent in localstorage
            const combinedId = createCombinedId(email, state.email)

            // create new game if both users have no previous games pending.
            socket.emit('createGame', { combinedId, username, opponentEmail: state.email }, callback)

            // callback is called on the serverside and sends err or roomId as arguments
            function callback(err, roomId) {

                if (!!err) {
                    setSocketerr(err)
                }
                else if (!!roomId) {
                    // localStorage.setItem('roomId', roomId)
                    navigate('/gameBoard', {
                        state: {
                            roomId,
                        }
                    })

                }

            }

        }
        else {

            // this method is called if the user is in the login or register page
            postData({ gotoUrl, url, state, dispatch })

        }
    }

    return (
        <Wrapper>
            <ArrowButton url={previousUrl} />
            <PageHeader>
                <PageHeaderText props={HeadingText} />
                <PageHeaderText props={formCaption} />
            </PageHeader>

            <Form>
                <form onSubmit={e => e.preventDefault()}>
                    {
                        formDetails.map((props, i) => (
                            <InputField props={props} key={i} state={state} dispatch={dispatch} />
                        ))
                    }
                    {

                        !!error && <MessageBox bgColor={'#EB5757'} >{error} </MessageBox>
                    }
                    {
                        !!socketerr && <MessageBox bgColor={'#EB5757'} >{socketerr} </MessageBox>
                    }
                    {
                        !!status && <MessageBox bgColor={'#6FCF97'} >{status}</MessageBox>

                    }
                    {
                        !!loading && <p>loading....</p>
                    }

                    <Button margin={'70px 0 0 0'} bgColor={'#F2C94C'} btnText={btnText} callback={postUserData} />

                </form>
            </Form>
        </Wrapper>
    )
}
