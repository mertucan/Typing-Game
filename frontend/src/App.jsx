import { useState } from 'react'
import "tailwindcss/tailwind.css";
import Footer from './Components/Footer'
import '../public/index.css'
import Navbar from './Components/Navbar';
import WordContainer from './Components/WordContainer';
import InputContainer from './Components/InputContainer';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <h1>Deneme</h1>
    <InputContainer></InputContainer>
    <Footer></Footer>
    </>
  )
}

export default App
