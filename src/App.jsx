import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/layout/Layout'
import HeadphonePage from './pages/HeadphonePage'
import SpeakersPage from './pages/SpeakersPage'
import SoundbarPage from './pages/SoundbarPage'
import LuxuryAudioPage from './pages/LuxuryAudioPage'
import ProfessionalAudioPage from './pages/ProfessionalAudioPage'
import CarAudioPage from './pages/CarAudioPage'
import AccessoriesPage from './pages/AccessoriesPage'
import SoundOfCelebrationsPage from './pages/SoundOfCelebrationsPage'
import ClearanceSalePage from './pages/ClearanceSalePage'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Registrations from './pages/Registrations'
import Card from './pages/Card'
import ForgotPassword from './pages/ForgotPassword'
 
 // ========= App ========= // 
 function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='headphonePage' element={<HeadphonePage />} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Registrations' element={<Registrations/>} />
            <Route path='/Card' element={<Card/>} />
            <Route path='/ForgotPassword' element={<ForgotPassword/>} />
            <Route path='speakers' element={<SpeakersPage />} />
            <Route path='soundbar' element={<SoundbarPage />} />
            <Route path='luxuryAudio' element={<LuxuryAudioPage />} />
            <Route path='professionalAudio' element={<ProfessionalAudioPage />} />
            <Route path='carAudio' element={<CarAudioPage />} />
            <Route path='accessories' element={<AccessoriesPage />} />
            <Route path='soundOfCelebrations' element={<SoundOfCelebrationsPage />} />
            <Route path='clearanceSale' element={<ClearanceSalePage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
 }

 export default App
