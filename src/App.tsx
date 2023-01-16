import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}

