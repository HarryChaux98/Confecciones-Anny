import "./App.css";
import React, { useEffect, useState } from "react";
import imagen2 from "./pokemontest.png";
import imagen3 from "./pokebola.png";
import Header from "./componentes/Header";
import Body from "./componentes/Body";
import Footer from "./componentes//Footer";
import Inicio from "./paginas/Inicio";
import Acercade from "./paginas/Acercade";
import Pokemones from "./paginas/Pokemones";
import Camara from "./paginas/Camara";
import RecordView from "./paginas/RecordView";
import "./App.css";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReactMediaRecorder } from "react-media-recorder";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Acercade" element={<Acercade />} />
          <Route path="/camara" element={<Camara />} />
          <Route path="/RecordView" element={<RecordView />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Pokemones" element={<Pokemones />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Body" element={<Body />} />
        </Routes>
        {/* <Cuerpo/> */}
      </BrowserRouter>
      {/* <PiePagina/> */}
    </div>
    
    
  );
}

export default App;