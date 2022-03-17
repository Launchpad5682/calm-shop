import "./App.css";
import React from "react";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="body--section">
      <Header />
      <Outlet />
    </div>
  );
}

export { App };
