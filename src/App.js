import React from "react";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import News from "./components/News";
import Services from "./pages/Services";

import AboutUs from "./components/about_us";
import Footer from "./components/Footer";

import Account from "./components/account";

import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Sidebar />

          <div className="main">
            <Header />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </div>
          </div>

          <div className="wrapper__container">
            <AboutUs />
            <News />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
