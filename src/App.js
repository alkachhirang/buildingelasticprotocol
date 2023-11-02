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

function App() {
  return (
    <div>
      <Header />
      <Amplify />
      <Core />
      <Tokenomics/>
      <Team />
      <Ecosystum />
      <StartingSupply />
      <Future/>
      <Roadmap />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;