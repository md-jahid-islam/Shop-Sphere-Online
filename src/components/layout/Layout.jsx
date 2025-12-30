import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../footer/Footer'
import LuxuryAudioBanner from '../luxuryAudio/LuxuryAudioBanner'
 
 // =========== Layout =========== // 
 function Layout() {
    return (
        <>       
            <div className='container mx-auto'>
                <Navbar />   
                <LuxuryAudioBanner/>            
                <Outlet />
                <Footer />
            </div>
        </>
    )
 }

 export default Layout