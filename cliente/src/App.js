
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import PiePagina from './componentes/PiePagina';
import Contacto from './paginas/contacto';
import Inicio from './paginas/inicio';
import Modelos from './paginas/modelos';
import Conversacion from "./Conversacion";
import contacto from "./paginas/contacto";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          
            <Route path="/"  element={<Inicio/>}/>
            <Route path="modelos"  element={<Modelos/>}/>
            <Route path="conversacion" element={<Conversacion/>}/>
            <Route path="contacto" element={<Contacto/>}/>         
        </Routes>
        <PiePagina/>
    </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));