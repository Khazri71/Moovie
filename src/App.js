import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ToWatch from "./components/ToWatch";
import Watched from "./components/Watched";
import SearchAdd from "./components/SearchAdd";
import GlobalProvider from "./components/context/GlobalContext";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/to-watch" element={<ToWatch />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/search-add" element={<SearchAdd />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
