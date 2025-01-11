import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/home/page";
import LoginPage from "./pages/login/page";
import BarberPage from "./pages/profiles/barbers/page";
import ProfilePageMe from "./pages/profiles/me/page";
import TattooPageList from "./pages/tattoos/page";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/tattoos" element={<TattooPageList />} />
        <Route path="/profiles/barber/:Id" element={<BarberPage />} />
        <Route path="/profiles/me" element={<ProfilePageMe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
