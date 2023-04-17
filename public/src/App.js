import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Need from "./pages/Need";
import Map from "./pages/Map";
import Parent from "./pages/Parent";
import Lmap from "./pages/Lmap";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/offer" element={<Offer/>}/>
        <Route path="/need" element={<Need/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path="/parent" element={<Parent/>}/>
        <Route path="/lmap" element={<Lmap/>}/>


      </Routes>
    </BrowserRouter>
  );
}


