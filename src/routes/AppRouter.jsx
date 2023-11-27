import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hola from "../components/Hola";
import Qondis from "../components/Qondis";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Qondis/>}/>
        <Route path="/stats" element={<Hola />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
