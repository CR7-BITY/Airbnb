import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import facebook from "../img/facebook.png";
import google from "../img/google.png";
import apple from "../img/apple.png";
import email from "../img/email.png";
import movil from "../img/movil.png";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import { auth, facebookProvider, googleProvider } from "./firebase/config";

const Sesion = ({ setIniciar }) => {
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");

  const cerrarPopup = () => {
    setIniciar((a) => !a);
  };

  const googleSesionin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(auth);

  const facebookSesionin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmacion = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmacion);
    } catch (err) {
      console.error(err);
    }
  };

  const verificarOtp = async () => {
    try {
      await user.confirm(otp);
    } catch (err) {
      console.error(err);
    }
  };

  const Registrado = ()=> {
    <h2>FELICITACIONES, ESTAS REGISTRADO</h2>
  }

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-tittle"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="p-2 pb-8 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="p-4 mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex">
              <h1 onClick={cerrarPopup} className="cursor-pointer">
                X
              </h1>
              <h3
                className="ml-28 text-base font-bold leading-6 text-gray-900"
                id="modal-tittle"
              >
                {phone
                  ? "Confirma tu nuúmero de celular"
                  : "Inicia sesión o regístrate"}
              </h3>
            </div>
            <hr className="mt-4" />
            <h1 className="mt-4 font-semibold text-2xl">
              {!phone && "¡Te damos la bienvenida a Airbnb!"}
            </h1>
            {email ? (
              <input
                type="text"
                className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg block w-11/12 h-12 mt-4 p-2.5 outline-none border-black"
                placeholder="Email"
                required
              />
            ) : (
              <PhoneInput
                value={phone}
                onChange={(phone) => setPhone("+" + phone)}
                placeholder="Numero telefónico"
                inputStyle={{ with: "453px", height: "50px", fontSize: "17px" }}
                containerStyle={{ marginTop: "15px", marginLeft: "20px" }}
              />
            )}
            {email && (
              <input
                type="text"
                className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg block w-11/12 h-12 mt-4 p-2.5 outline-none border-black"
                placeholder="Password"
                required
              />
            )}
            <div id="recaptcha" className="mt-3 ml-5"></div>
            {phone && (
              <button
                onClick={sendOtp}
                type="button"
                className="ml-5 text-white bg-rose-600 focus:ring-4 font-medium mt-3 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-11/12 h-12"
              >
                Enviar OTP
              </button>
            )}
            {otp && (
              <button
                onClick={verificarOtp}
                type="button"
                className="ml-5 text-white bg-rose-600 focus:ring-4 font-medium mt-3 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-11/12 h-12"
              >
                Verificar OTP
              </button>
            )}
            {user && (
              <input
                onChange={(e) => setOtp(e.target.value)}
                type="text"
                className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg block w-11/12 h-12 mt-4 p-2.5 outline-none border-black"
                placeholder="Otp"
                required
              />
            )}
            <h1 className="text-xs ml-5">
              Te llamaremos o enviaremos un SMS para confirmar tu número. Se
              aplican las tarifas estándar de mensajes y datos. Política de
              Privacidad
            </h1>

            {!phone && (
              <button onClick={()=> {Registrado()}}
              type="button"
              className="ml-5 text-white bg-rose-600 focus:ring-4 font-medium mt-3 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-11/12 h-12"
              >
                {email ? "Agregar y continuar" : "Continuar"}
              </button>
            )}
            <h1 className="text-center mt-3">o</h1>
            {!phone && (
              <div onClick={facebookSesionin} className="cursor-pointer hover:bg-gray-200  ml-5 w-11/12 p-3 mt-3 flex items-center border border-spacing-1 rounded-xl border-black">
                <img src={facebook} className="h-6 w-6 ml-3" />
                <h1 className="ml-24">Continúa con Facebook</h1>
              </div>
            )}
            {!phone && (
              <div
                onClick={googleSesionin}
                className="cursor-pointer hover:bg-gray-200  ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl border-black"
              >
                <img src={google} className="h-6 w-6 ml-3" />
                <h1 className="ml-24">Continúa con google</h1>
              </div>
            )}
            <div className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl border-black">
              <img src={apple} className="h-6 w-6 ml-3" />
              <h1 className="ml-24">Continúa con apple</h1>
            </div>
            {!email ? (
              <div
                onClick={() => setEmail(true)}
                className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl border-black"
              >
                <img src={email} className="h-6 w-6 ml-3" />
                <h1 className="ml-24">Continúa con gmail</h1>
              </div>
            ) : (
              <div
                onClick={() => setEmail(false)}
                className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl border-black"
              >
                <img src={movil} className="h-6 w-6 ml-3" />
                <h1 className="ml-24">Continúa con el número telefónico</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sesion;
