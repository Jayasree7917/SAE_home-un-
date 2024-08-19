import { Route,Routes } from "react-router-dom"
import "./App.css";
import {Footer} from "./components/Footer"
import { Navbar } from "./components/Navbar";
import { Home , Aarohan ,  Events , Tedx , Teams , Alumni  } from "./components/pages";

function App() {
  return (
    <div className="App">

      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aarohan" element={<Aarohan />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tedx" element={<Tedx />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
      <Footer />

    </div>
  );
}


export default App;