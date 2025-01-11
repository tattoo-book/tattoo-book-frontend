import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import BarberPage from "./pages/barbers/page";
import HomePage from "./pages/home/page";
import LoginPage from "./pages/login/page";
import TattooPageList from "./pages/tattoos/page";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/tattoos" element={<TattooPageList />} />
        <Route path="/barber/:Id" element={<BarberPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
