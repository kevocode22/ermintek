import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom'
import Celulares from './pages/Celulares'
import Computadoras from './pages/Computadoras'
import Precios from './pages/Precios'
import Apple from './pages/Apple'
import ScrollToTop from "react-scroll-to-top";
import 'tw-elements'
import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import celularesActions from "./redux/actions/celularesActions";

function App() {

  const dispatch= useDispatch();

useEffect(()=>{
let res= dispatch(celularesActions.getCelulares())
console.log(res)
//eslint-disable-next-line
},[])

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
        style={{ backgroundColor: "#e46804", paddingLeft:"0.4rem", borderRadius:"50%"}}
        smooth
      />
    </>
  );
}

export default App;
