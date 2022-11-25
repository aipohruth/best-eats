import React from "react";
import HeadlineCard from "./components/HeadlineCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from './Data';
import { useState } from "react";

function App() {
  const [infos, setInfos] = useState(data)
  return (
    <div >
    <Navbar />
    <Hero />
    <HeadlineCard infos={infos} setInfos={setInfos}/>
    </div>
  );
}

export default App;
