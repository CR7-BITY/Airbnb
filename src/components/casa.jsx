import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import down from "../img/down.png";
import ubicacion from "../img/ubicaion.png"
import key from "../img/key.png"
import huella from "../img/huella.png"
import "../index.css";

export default function Casa() {
  const [casa, setCasa] = useState({});
  useEffect(() => {
    setCasa(JSON.parse(localStorage.getItem("casa") ?? "{}"));
  }, []);
  return (
    <>
      <Navbar />
      <div className="my-5 ml-11">
        <Link
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          to="/"
        >
          Volver
        </Link>
      </div>
      <div className="sec-principal mx-36">
        <h2 className="text-4xl	my-5">{casa.lugar}</h2>
        {/* <p>{casa.puntos}</p> */}
        <div className="sec flex mt-5">
          <img
            src={casa.foto}
            alt=""
            className="sec-casa w-6/12 h-[23rem] rounded-l-xl"
          />
          <div className="sec-1">
            <div className="flex">
              <img src={casa.foto} alt="" className="w-72 h-44 ml-2" />
              <img
                src={casa.foto}
                alt=""
                className="w-72 h-44 ml-2 rounded-r-xl"
              />
            </div>
            <div className="flex">
              <img src={casa.foto} alt="" className="w-72 h-44 ml-2 mt-4" />
              <img
                src={casa.foto}
                alt=""
                className="w-72 h-44 ml-2 rounded-r-xl mt-4"
              />
            </div>
          </div>
        </div>
        {/* <img src={casa.estrella} alt="" /> */}
        <p className="lugar-1 text-3xl font-semibold mt-5">
          Alojamiento entero: {casa.lugar}
        </p>
        <small className="part-1 text-sm mt-1">
          5 viajeros · 2 dormitorios ·2 camas · 1 baño
        </small>
        <p className="part-1"> {casa.particular}</p>
        <b className="precio-1">{casa.precio} noche</b>

        <div className="sec-2 flex justify-between">
            <div className="secpart-1 pt-[3.5rem]">
                <hr className="py-3"/>
                <div className="flex items-center mb-6">
                    <img className="h-6 w-6 mr-7" src={ubicacion} alt="" />
                    <div className="">
                        <b>Ubicación fantástica</b>
                        <p className="text-gray-500">El 100 % de los últimos huéspedes han valorado con 5 estrellas la ubicación.</p>
                    </div>
                </div>
                <div className="flex items-center mb-6">
                    <img className="h-6 w-6 mr-7" src={key} alt="" />
                    <div className="">
                        <b>Proceso de llegada excelente</b>
                        <p className="text-gray-500">El 100 % de los últimos huéspedes han valorado con 5 estrellas el proceso de llegada.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <img className="h-6 w-6 mr-7" src={huella} alt="" />
                    <div className="">
                        <b>Las mascotas son bienvenidas</b>
                        <p className="text-gray-500">Tus mascotas pueden acompañarte.</p>
                    </div>
                </div>
                <hr className="mt-5"/>
            </div>

          <div className="caja border border-slate-300 py-5 px-5 rounded-lg w-2/6">
            <p className="flex items-center py-3 ">
              <b className="pr-2 text-2xl">{casa.precio}</b> <p>noche</p>
            </p>
            <div className="grid grid-cols-2 border border-slate-300 rounded-lg w-full">
              <div className="border border-slate-300 py-3 px-3">Llegada</div>
              <div className="py-3 px-3 border border-slate-300">Salida</div>
              <div className="col-span-2 py-3 px-3 flex items-center justify-between border border-slate-300">
                Huéspedes
                <img className="h-4 w-4" src={down} alt="" />
              </div>
            </div>
            <div className="btn btn1">
              <div className="inner"></div>
              <button>Reservar</button>
            </div>
              <p className="text-center py-2">No se te cobrará nada aún</p>
              <div className="flex justify-between pb-2"><p className="underline underline-offset-2">80$ x 7 noches</p> <p>560$</p></div>
              <div className="flex justify-between pb-2"><p className="underline underline-offset-2">Gastos de limpieza</p> <p>75$</p></div>
              <div className="flex justify-between pb-4"><p className="underline underline-offset-2">Comisión de servicio de Airbnb</p> <p>108$</p></div>
              <hr />
              <div className="flex justify-between pt-4"><b>Total</b> <p>{casa.precio}</p></div>
          </div>
        </div>
      </div>

      <div className="foot-principal bg-slate-100 mt-24">
      <hr className="w-full"/>
        <br />
        <div className="mt-8"><hr className="w-full"/></div>
      <div className="foot grid grid-cols-4 gap-x-36 py-8 mx-[8rem]">
                <div className="foot-1 flex flex-col gap-y-3 text-gray-800 ">
                    <h1 className="tit-1 font-semibold text-black">Asistencia</h1>
                    <p className="no-underline hover:underline cursor-pointer">Centro de ayuda</p>
                    <p className="no-underline hover:underline cursor-pointer">AirCover</p>
                    <p className="no-underline hover:underline cursor-pointer">Lucha contra la discriminación</p>
                    <p className="no-underline hover:underline cursor-pointer">Ayuda a la discapacidad</p>
                    <p className="no-underline hover:underline cursor-pointer">Opciones de cancelación</p>
                    <p className="no-underline hover:underline cursor-pointer">¿Problemas en el barrio?</p>
                    <p className="no-underline hover:underline cursor-pointer">Centro de ayuda</p>
                </div>
                <div className="foot-2 flex flex-col gap-y-3 text-gray-800">
                    <h1 className="tit-2 font-semibold text-black">Cómo ser anfitrión</h1>
                    <p className="no-underline hover:underline cursor-pointer">Pon tu casa en Airbnb</p>
                    <p className="no-underline hover:underline cursor-pointer">AirCover para anfitriones</p>
                    <p className="no-underline hover:underline cursor-pointer">Recursos para anfitriones</p>
                    <p className="no-underline hover:underline cursor-pointer">Foro de la comunidad</p>
                    <p className="no-underline hover:underline cursor-pointer">Ser un anfitrión responsable</p>
                </div>
                <div className="foot-3 flex flex-col gap-y-3 text-gray-800">
                    <h1 className="tit-3 font-semibold text-black">Airbnb</h1>
                    <p className="no-underline hover:underline cursor-pointer">Newsroom</p>
                    <p className="no-underline hover:underline cursor-pointer">Nuevas funciones</p>
                    <p className="no-underline hover:underline cursor-pointer">Empleo</p>
                    <p className="no-underline hover:underline cursor-pointer">Inversores</p>
                    <p className="no-underline hover:underline cursor-pointer">Tarjetas regalo</p>
                    <p className="no-underline hover:underline cursor-pointer">Estancias con Airbnb.org</p>
                </div>
            </div>
            <div className="fin py-5 text-slate-800 mx-[8rem]">
      <hr className="w-5/6 pb-5"/>
                <p>© 2024 Airbnb, Inc. · Privacidad · Condiciones · Mapa del sitio · Datos de la empresa</p>
            </div>
      </div>
    </>
  );
}
