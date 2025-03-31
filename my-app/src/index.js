import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Nopage from './pages/Nopage';
import Contact from './pages/Contact';
import Genre from './pages/Genre';
import RN from './pages/RN';
import PB from './pages/PB';
import KW from './pages/KW';
import DN from './pages/DN';
import JW from './pages/JW';
import FG from './pages/FG';
import FR from './pages/FR';
import FreeG from './pages/FreeG';
import WC from './pages/WC';
import FLMM from './pages/FLMM';
import LLL from './pages/LLL';
import Idea from './pages/Idea';
import Anyone from './pages/Anyone';

function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact/>}/>
          <Route path="genre" element={<Genre/>}/>
          <Route path="*" element={<Nopage/>} />
          <Route path="Red Notice" element={<RN/>}/>
          <Route path="Puss in the boots" element={<PB/>}/>
          <Route path="A Knight's War" element={<KW/>}/>
          <Route path="Dark Nuns" element={<DN/>}/>
          <Route path="John Wick" element={<JW/>}/>
          <Route path="The Fall Guy" element={<FG/>}/>
          <Route path="Flight Risk" element={<FR/>}/>
          <Route path="Free Guy" element={<FreeG/>}/>
          <Route path="White Chicks" element={<WC/>}/>
          <Route path="Fly me to the moon" element={<FLMM/>}/>
          <Route path="La La Land" element={<LLL/>}/>
          <Route path="The Idea of You" element={<Idea/>}/>
          <Route path="Anyone But You" element={<Anyone/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);