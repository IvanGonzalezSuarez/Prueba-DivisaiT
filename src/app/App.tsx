import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Location } from "../pages/Location/Location";
import { Home } from "../pages/Home/Home";
import { Weather } from "../pages/Weather/Weather";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
