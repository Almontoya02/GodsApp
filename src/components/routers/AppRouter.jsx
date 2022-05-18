import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Footer } from '../ui/Footer';
import { Navbarmain } from '../ui/Navbar';
import { GodsEgypt } from './../gods/GodsEgypt';
import { GodsGriegos } from './../gods/GodsGriegos';
import { GodsNordicos } from './../gods/GodsNordicos';


export const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Navbarmain/>
            <Routes>
                <Route path="/egipcios" element={<GodsEgypt />} />
                <Route path="/griegos" element={<GodsGriegos />} />
                <Route path="/nordicos" element={<GodsNordicos />} />
                <Route path="/*" element={<GodsEgypt />} />
                <Route path="/" element={<GodsEgypt />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>  
  )
}
