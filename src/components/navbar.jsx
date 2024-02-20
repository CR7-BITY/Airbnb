import { useState } from "react"
import "../index.css"
import Airbnb from "../img/Airbnb.png"
import search from "../img/search.png"
import menu from "../img/menu.png"
import user from "../img/user.png"
import tierra from "../img/tierra.png"
import Sesion from "./sesion"
import Login from "./login"
 const Navbar = () => {

  const [popUp,setPopUp] = useState(false)
  const [registro,setRegistro] = useState(false)
  const [iniciar,setIniciar] = useState(false)


  return (
    <div className="hijo flex items-center p-3 border border-b-gray-300">
        <img src={Airbnb} className="logo w-24 h-8 ml-28"/>
        <div className="contenedor ml-56 flex items-center border border-gray-300 rounded-full p-1 shadow-lg">
        <input type="text" id="first_name" className="destino text-gray-900 text-sm rounded-full block w-60 h-16 p-2 outline-none" placeholder="Buscar destinos" required/> <div className="vertival-line"></div>
        <input type="text" id="first_name" className="llegada text-gray-900 text-sm rounded-full block w-28 h-16 p-4 outline-none" placeholder="introduce la llegada" required/> <div className="vertival-line"></div>
        <input type="text" id="first_name" className="salida text-gray-900 text-sm rounded-full block w-28 h-16 p-4 outline-none" placeholder="introduce la salida" required/> <div className="vertival-line"></div>
        <input type="text" id="first_name" className="viajeros text-gray-900 text-sm rounded-full block w-52 h-16 p-2.5 outline-none"placeholder="Añade viajeros" required/>
        <img src={search} className="w-12 h-12 "/>
        </div>

        <img src={tierra} className="tierra w-6 h-6 ml-28"/>
        <div onClick={()=> setPopUp(!popUp)} className="buscar cursor-pointer flex items-center border border-spacing-1 rounded-full p-3 ml-4">
          {popUp && <div className="shadow-xl h-16 w-28 z-10 absolute bg-white mt-32 p-1">
            <h1 onClick={()=> setRegistro(true)} className="font-semibold text-sm">Regístrate</h1>
            <hr className="mt-2"/>
            <h1 onClick={()=> setIniciar(true)} className="font-thin text-sm">Iniciar sesión</h1>
          </div>}
          <img src={menu} className="w-5 h-5"/>
          <img src={user} className="w-8 h-8 ml-3"/>
        </div>
        {iniciar && <Sesion setIniciar={setIniciar}/>}
        {registro && <Login setRegistro={setRegistro}/>}
    </div>
  )
}

export default Navbar
