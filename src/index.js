import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Restaurants from "./Pages/Restaurants";
import About from "./Pages/About";
import Footer from "./Components/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
      <Home />
      <Restaurants />
      <About/>
      <Footer/>
  </React.StrictMode>
);

