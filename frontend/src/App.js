import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom'
import Celulares from './pages/Celulares'
import Computadoras from './pages/Computadoras'
import Precios from './pages/Precios'
import Apple from './pages/Apple'
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/celulares" element={<Celulares />} />
        <Route path="/computadoras" element={<Computadoras />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/apple" element={<Apple />} />
      </Routes>
      <Footer />
      <ScrollToTop
        style={{ backgroundColor: "#ff8e72" }}
        smooth
      />
    </>
  );
}

export default App;
