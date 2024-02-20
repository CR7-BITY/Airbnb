import { Link, useNavigate } from "react-router-dom";
import star from "../img/star.png"
import "../index.css"
import { casas } from "../constante";

const Inicio = () => {
    const navigate = useNavigate()
    const enviarACasa = (casa) => {

        localStorage.setItem('casa', JSON.stringify(casa))
    }
  return (
    <div className="home rounded-t-xl ml-11 mt-7 overflow-hidden flex items-center gap-6 flex-wrap justify-center mb-[5rem]">
      {casas.map((casa, index) => (
      <div key={index}>
          <Link to={`/casa/${casa.lugar.replace(/ /g, '-').toLowerCase()}`}  onClick={() => enviarACasa(casa)}>
            <img className="casas w-80 h-64 rounded-xl" src={casa.foto} alt="" />
          
          <div className="py-1">
            <div className="datos mb-1 text-lg font-semibold flex justify-between">
                <div>
                {casa.lugar}
                </div>
            <div className="datos-1 flex items-center text-sm">
            <img src={star} className="star h-4 w-4 mr-1" alt="" />
            {casa.puntos}
            </div>
            </div>
            <p className="particular text-sm text-gray-700 dark:text-gray-400">
              {casa.particular}
            </p>
            <h2 className="fecha text-gray-500 mb-1">{casa.fecha}</h2>
            <h1 className="precio font-semibold">{casa.precio} noche</h1>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Inicio;
