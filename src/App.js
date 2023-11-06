import './App.css';
import Header from './components/Header';
import Amplify from './components/Amplify';
import Contact from './components/Contact';
import Core from './components/Core';
import Ecosystum from './components/Ecosystum';
import Footer from "./components/Footer";
import Roadmap from './components/Roadmap';
import StartingSupply from './components/StartingSupply';
import Future from './components/Future';
import Team from './components/Team';
import Tokenomics from './components/Tokenomics';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200
      }
    );
    Aos.refresh()
  });
  return (
    <div>
      <Header />
      <Amplify />
      <Core />
      <Tokenomics />
      <StartingSupply />
      <Future />
      <Team />
      <Ecosystum />
      <Roadmap />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
