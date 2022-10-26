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
import SignIn from "./pages/SignIn";
import { Toaster } from 'react-hot-toast';
import usuariosActions from './redux/actions/usuariosActions'


function App() {

  const dispatch= useDispatch();

useEffect(()=>{
let res= dispatch(celularesActions.getCelulares())
console.log(res)
if (localStorage.getItem('token') !== null) {
  const token = localStorage.getItem("token")
  dispatch(usuariosActions.verificarToken(token))
}
//eslint-disable-next-line
},[])

  return (
    <>
      <Nav />
      <Toaster
            position="bottom-center"
            toastOptions={{
              className: '',
              style: {
                boxShadow: "0px 3px 10px rgba(8, 8, 8, 0.413)",
                background: '#333',
                padding: '1rem',
                color: '#fff',
                textAlign: "center",
                fontSize: "16px",
                border: "5px solid #e46804",
              },
            }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/signin" element={<SignIn/>} />
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
