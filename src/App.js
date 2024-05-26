// import ReactDOM from 'react-dom/client';
import "./index.css";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context";

function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
            <Route path="About" element={<About />} />
            <Route path="Book" element={<BookList />} />
            <Route path="Book/:id" element={<BookDetails />} />
            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
