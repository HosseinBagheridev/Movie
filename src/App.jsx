import { Header } from './Component/Header/Header'
import { Main } from './Component/Main/Main'
import MovieDetail from './Component/MovieDetail'
import { Routes, Route , useLocation} from 'react-router-dom'
import { useState } from "react";
import HeaderSwiper from './Component/Header/HeaderSwiper'
import { Footer } from './Component/Footer/Footer'
import { SignUp } from './Component/form/SignUp'
import {Navigation} from './Component/Navigation/Navigation'
import { Login } from './Component/form/Login'
import { People } from './Component/People/People';
import { Genres } from './Component/Navigation/Genres';
import { About } from './Component/Navigation/About';


export default function App() {
  const [bgImage, setBgImage] = useState(null);
  const location = useLocation();
  const isAuthPage = location.pathname === "/signup" || location.pathname === "/login";

  return (
    <>
    {!isAuthPage && <Header bgImage={bgImage} setBgImage={setBgImage} />}
      <Routes>
        <Route path="/" element={<Main setBgImage={setBgImage}/>} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/people" element={<People />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}
