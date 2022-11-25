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
<<<<<<< HEAD
    <HeadlineCard infos={infos} setInfos={setInfos} />
    <Food />
=======
    <HeadlineCard infos={infos} setInfos={setInfos}/>
>>>>>>> f53076ca8999c46fd726d8ce3a72cdae96f03b3b
    </div>
  );
}

export default App;
