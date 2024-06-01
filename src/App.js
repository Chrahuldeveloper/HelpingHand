import React from "react";
import "./App.css";
import { Donate, Home, Signin, Start } from "./pages";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Start />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Donate" element={<Donate />} />
    </Routes>
  );
}
