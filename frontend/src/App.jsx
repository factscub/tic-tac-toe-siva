import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoute'

// pages
import { EntryPage } from './Pages/EntryPage/EntryPage'
import { RegistrationPage } from './Pages/RegistrationPage/RegistrationPage'
import { LoginPage } from './Pages/LoginPage/LoginPage'
import { HomePage } from './Pages/HomePage/HomePage'
import { NewGamePage } from './Pages/NewGamePage/NewGamePage'
import { GameBoardPage } from './Pages/GameBoardPage/GameBoardPage'

// context providers
import { GameBoardProvider } from './Context/GameBoardContext/GameBoardContext'
import { CreateGameProvider } from './Context/CreateGameContext/CreateGameContext'
import { LoginProvider } from './Context/LoginContext/LoginContext'
import { RegisterProvider } from './Context/RegisterContext/RegisterContext'

// props for pages
import { registerProps } from './Constants/RegistrationData/Props'
import { loginProps } from './Constants/LoginData/Props'
import { homeProps } from './Constants/HomeData/Props'
import { newGameProps } from './Constants/NewGamePageData/Props'
import { gameBoardProps } from './Constants/GameBoardPage/Props'
import { entryProps } from './Constants/EntryData/Props'


function App() {

  return (
    <div className="App">
      <Routes>

        {/* index page */}
        <Route path='/' element={<EntryPage {...entryProps} />} />

        {/* register page route */}
        <Route path='register' element={
          <RegisterProvider>
            <RegistrationPage {...registerProps} />
          </RegisterProvider>
        } />

        {/* login page route */}
        <Route path='login' element={
          <LoginProvider>
            <LoginPage {...loginProps} />
          </LoginProvider>
        }
        />

        {/* home page route */}
        <Route path='home' element={
          <ProtectedRoute >
            <HomePage {...homeProps} />
          </ProtectedRoute>} />


        {/* newgame page route */}
        <Route path='newgame' element={
          <CreateGameProvider>
            <NewGamePage {...newGameProps} />
          </CreateGameProvider>
        } />


        {/* gameboard page route */}
        < Route path='gameBoard' element={
          <GameBoardProvider>
            <GameBoardPage {...gameBoardProps} />
          </GameBoardProvider>
        } />

      </Routes>
    </div>

  )
}

export default App

