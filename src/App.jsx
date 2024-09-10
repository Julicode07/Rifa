import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { RifaProvider } from "./context/RifaContext";

const App = () => {
  return (
    <Router basename="/Rifa/">
      <RifaProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </RifaProvider>
    </Router>
  );
};

export default App;
