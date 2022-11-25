import React from "react";
import HeadlineCard from "./components/HeadlineCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Data from './Data/Data';
import { useState } from "react";
import Food from "./components/Food";

function App() {
  const [infos, setInfos] = useState(Data)
  return (
    <div >
    <Navbar />
    <Hero />
    <HeadlineCard infos={infos} setInfos={setInfos} />
    <Food />
    </div>
  );
}

export default App;
