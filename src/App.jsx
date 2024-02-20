import "./App.css";
import Index from "./components/index";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Sesion from "./components/sesion";
import Inicio from "./components/inicio";
import Menu from "./components/menu";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Casa from "./components/casa";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="login" element={<Login />} />
          <Route path="sesion" element={<Sesion />} />
          <Route path="navbar" element={<Navbar />} />
          <Route path="inicio" element={<Inicio />} />
          <Route path="menu" element={<Menu />} />
          <Route path="/casa/:name" element={<Casa />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
