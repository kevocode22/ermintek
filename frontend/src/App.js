import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from 'react-router-dom'
import { Celulares, Computadoras, Apple, Home, SignIn, Precios } from './pages/index'
import ScrollToTop from "react-scroll-to-top";
import 'tw-elements'
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import celularesActions from "./redux/actions/celularesActions";
import { Toaster } from 'react-hot-toast';
import usuariosActions from './redux/actions/usuariosActions';
import laptopsActions from "./redux/actions/laptopsActions";
import macBooksActions from "./redux/actions/macBooksActions";
import DetailsCellPhone from "./components/CellPhones/DetailsCellPhone";
import ComputersDetails from './components/Computers/DetailsComputers';
import AppleDetails from './components/Apple/AppleDetails'

function App() {
  window.scrollTo({ top: 0, behavior: "smooth" })

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(celularesActions.getCelulares())
    dispatch(laptopsActions.getLaptops())
    dispatch(macBooksActions.getmacBooks())
    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem("token")
      dispatch(usuariosActions.verificarToken(token))
    }
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <Nav />
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: '',
          style: {
            boxShadow: "0px 3px 10px rgba(8, 8, 8, 0.413)",
            background: '#832780',
            padding: '1rem',
            color: '#ffff',
            textAlign: "center",
            fontSize: "16px",
            border: "none"
          },
        }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/account" element={<SignIn />} />
        <Route path="/celulares" element={<Celulares />} />
        <Route path="/computadoras" element={<Computadoras />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/apple/caracteristicas/:id" element={<AppleDetails />} />
        <Route path="/celulares/caracteristicas/:id" element={<DetailsCellPhone />} />
        <Route path="/computadoras/caracteristicas/:id" element={<ComputersDetails />} />
      </Routes>
      <Footer />
      <ScrollToTop
        style={{ backgroundColor: "#832780", paddingLeft: "0.4rem", borderRadius: "50%", color:"#fffff" }}
        smooth
      />
    </>
  );
}

export default App;
