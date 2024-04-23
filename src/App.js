import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home/home";
import Intro from "./Intro/intro";
import Ready from "./ready/ready";
import MatchingGame from "./MatchingGame/matchinggame";
import HowP from "./HowPlay/howP";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/intor1" element={<Intro/>}/>
      <Route path="/ready" element={<Ready/>}/>
      <Route path="/info" element={<HowP/>}/>
      <Route path="/game" element={<MatchingGame/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
