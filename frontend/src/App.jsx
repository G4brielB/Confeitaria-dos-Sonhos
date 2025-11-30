import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Main from './main/Main'
import './App.css'
import Login from './components/Login'
import CreateAccount from "./components/CreateAccount.jsx"
import Cardapio from './components/Cardapio.jsx'
import Pedidos from './components/Pedidos.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccout" element={<CreateAccount />} />
        <Route path="cardapio" element={<Cardapio/>} />
        <Route path="pedidos" element={<Pedidos/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
