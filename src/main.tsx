import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/home/page";
import LoginPage from "./pages/login/page";
import ProfilePageMe from "./pages/profiles/me/page";
import TattooArtistPage from "./pages/profiles/tattoo-artist/page";
import { RegisterPage } from "./pages/register/page";
import TattooPageList from "./pages/tattoos/page";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/tattoos" element={<TattooPageList />} />
            <Route path="/profiles">
              <Route path="tattoo-artist/:Id" element={<TattooArtistPage />} />
              <Route path="me" element={<ProfilePageMe />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
