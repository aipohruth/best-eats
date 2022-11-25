import React from "react";
import HeadlineCard from "./components/HeadlineCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Data from './Data/Data';
import { useState } from "react";
import Food from "./components/Food";
import Category from "./components/Category";
import Footer from "./components/Footer";

function App() {
  const [infos, setInfos] = useState(Data)
  return (
    <div >
    <Navbar />
    <Hero />
    <HeadlineCard infos={infos} setInfos={setInfos} />
    <Food />
    <Category />
    <Footer />
    </div>
  );
}

export default App;
