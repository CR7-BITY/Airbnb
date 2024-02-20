import "../index.css"
import down from "../img/down.png"

const Footer = ()=>{

    return(
    <footer>

        <div className="pie bg-slate-100 mt-5 pt-5">
            <div className="pies mx-11 px-11">
            <h1 className="pie-2 text-2xl	font-medium pb-5">Inspiración para futuras escapadas</h1>
            <ul className="pie-2 flex gap-9 mb-3">
                <li className="no-underline underline-offset-8 hover:underline cursor-pointer">Más buscados</li>
                <li className="no-underline underline-offset-8 hover:underline cursor-pointer">Ciudades</li>
                <li className="no-underline underline-offset-8 hover:underline cursor-pointer">Playas</li>
                <li className="no-underline underline-offset-8 hover:underline cursor-pointer">Islas</li>
                <li className="no-underline underline-offset-8 hover:underline cursor-pointer">Montañas</li>
                <li className="no-underline underline-offset-8 hover:underline cursor-pointer">Categorías</li>
                <li className="no-underline underline-offset-8 hover:underline cursor-pointer">Actividades</li>
            </ul>
            <hr className="h-2"/>
            <div className="pie-3 grid grid-cols-6 gap-4 mt-5 mb-10">
            <div className="cursor-pointer">
                <h2 className="font-medium">Ámsterdan</h2>
                <p className="text-gray-600">Cabañas en alquiler</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">Barcelona</h2>
                <p className="text-gray-600">Alquiler vacaciones</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">Benásque</h2>
                <p className="text-gray-600">Apartamentos en alquiler</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">Burdeos</h2>
                <p className="text-gray-600">Casas en alquiler</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">Cercedillas</h2>
                <p className="text-gray-600">Casas rurales en alquiler</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">Deltebre</h2>
                <p className="text-gray-600">Alquileres en alquiler</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">La Molina</h2>
                <p className="text-gray-600">Alquileres en alquiler</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">Landes</h2>
                <p className="text-gray-600">Alquileres en alquiler</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">Londres</h2>
                <p className="text-gray-600">Alojamientos en alquiler a pie de playa</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">Mandello del Lario</h2>
                <p className="text-gray-600">Alquileres en alquiler</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">Motril</h2>
                <p className="text-gray-600">Apartamentos en alquiler</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">Orbaneja del castillo</h2>
                <p className="text-gray-600">Alquileres vacacionales</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">Palmeira</h2>
                <p className="text-gray-600">Alquileres vacacionales</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">París</h2>
                <p className="text-gray-600">Casas rurales en alquiler</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">El Poble Nou del Delta</h2>
                <p className="text-gray-600">Alquileres vacacionales</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">Riópar</h2>
                <p className="text-gray-600">Casas en alquiler</p>
            </div>
            <div className="cursor-pointer">
                <h2 className="font-medium">Roma</h2>
                <p className="text-gray-600">Alquileres vacacionales</p>
            </div>
            <div className="flex items-center">
                <h2 className="font-medium no-underline underline-offset-8 hover:underline cursor-pointer">Mostrar más</h2>
                <img className="h-4 w-4" src={down} alt="" />
            </div>
            </div>
            <hr />
            
            <div className="pie-4 grid grid-cols-4 gap-x-36 my-10">
                <div className="parte-1 flex flex-col gap-y-3 text-gray-800 ">
                    <h1 className="tit font-semibold text-black">Asistencia</h1>
                    <p className="no-underline hover:underline cursor-pointer">Centro de ayuda</p>
                    <p className="no-underline hover:underline cursor-pointer">AirCover</p>
                    <p className="no-underline hover:underline cursor-pointer">Lucha contra la discriminación</p>
                    <p className="no-underline hover:underline cursor-pointer">Ayuda a la discapacidad</p>
                    <p className="no-underline hover:underline cursor-pointer">Opciones de cancelación</p>
                    <p className="no-underline hover:underline cursor-pointer">¿Problemas en el barrio?</p>
                    <p className="no-underline hover:underline cursor-pointer">Centro de ayuda</p>
                </div>
                <div className="parte-2 flex flex-col gap-y-3 text-gray-800">
                    <h1 className="tit font-semibold text-black">Cómo ser anfitrión</h1>
                    <p className="no-underline hover:underline cursor-pointer">Pon tu casa en Airbnb</p>
                    <p className="no-underline hover:underline cursor-pointer">AirCover para anfitriones</p>
                    <p className="no-underline hover:underline cursor-pointer">Recursos para anfitriones</p>
                    <p className="no-underline hover:underline cursor-pointer">Foro de la comunidad</p>
                    <p className="no-underline hover:underline cursor-pointer">Ser un anfitrión responsable</p>
                </div>
                <div className="parte-3 flex flex-col gap-y-3 text-gray-800">
                    <h1 className="tit font-semibold text-black">Airbnb</h1>
                    <p className="no-underline hover:underline cursor-pointer">Newsroom</p>
                    <p className="no-underline hover:underline cursor-pointer">Nuevas funciones</p>
                    <p className="no-underline hover:underline cursor-pointer">Empleo</p>
                    <p className="no-underline hover:underline cursor-pointer">Inversores</p>
                    <p className="no-underline hover:underline cursor-pointer">Tarjetas regalo</p>
                    <p className="no-underline hover:underline cursor-pointer">Estancias con Airbnb.org</p>
                </div>
            </div>
            <hr />
            <div className="final py-5 text-slate-800	">
                <p>© 2024 Airbnb, Inc. · Privacidad · Condiciones · Mapa del sitio · Datos de la empresa</p>
            </div>
            </div>
            
        </div>
    </footer>
    )
}
export default Footer