import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/home/page";
import LoginPage from "./pages/login/page";
import ProfilePageMe from "./pages/profiles/me/page";
import TattooArtistPage from "./pages/profiles/tattoo-artist/page";
import TattooPageList from "./pages/tattoos/page";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/tattoos" element={<TattooPageList />} />
        <Route path="/profiles">
          <Route path="tattoo-artist/:Id" element={<TattooArtistPage />} />
          <Route path="me" element={<ProfilePageMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
