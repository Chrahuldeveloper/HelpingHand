import React from "react";
import "./App.css";
import { Donate, DonatePage, Home, Signin, Start, UserProfile } from "./pages";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Start />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/FullDonation" element={<Donate />} />
      <Route path="/Donate" element={<DonatePage />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
}
