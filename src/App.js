import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Alert, Header } from "./components";

function App() {
  return (
    <div className="body--section">
      <Header />
      <Outlet />
      <Alert />
    </div>
  );
}

export { App };
