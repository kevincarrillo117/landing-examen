import React, { useState } from "react";
import Checkbox from "./Checkbox";

const translations = {
    es: {
        datos: "TUS DATOS",
        nombre: "Nombre",
        telefono: "Teléfono",
        mensaje: "Escribe tu mensaje",
        terminos: "Al proporcionar mi número de teléfono a The Mendoza Law Firm, acepto y reconozco que The Mendoza Law.",
        politica: "Política de privacidad",
        verMas: "Ver más",
        enviar: "ENVIAR",
        errores: {
            nombre: "Nombre requerido",
            telefono: "Teléfono inválido",
            mensaje: "Mensaje requerido",
            terminos: "Debes aceptar los términos"
        }
    },
    en: {
        datos: "YOUR INFORMATION",
        nombre: "Name",
        telefono: "Phone",
        mensaje: "Write your message",
        terminos: "By providing my phone number to The Mendoza Law Firm, I agree and acknowledge that The Mendoza Law.",
        politica: "Privacy Policy",
        verMas: "See more",
        enviar: "SEND",
        errores: {
            nombre: "Name required",
            telefono: "Invalid phone number",
            mensaje: "Message required",
            terminos: "You must accept the terms"
        }
    }
};

export default function Form({ language }) {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        mensaje: "",
        aceptaTerminos: false,
    });
    const [errors, setErrors] = useState({});

    const validatePhone = (phone) => /^\d{10}$/.test(phone);

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.nombre.trim()) newErrors.nombre = translations[language].errores.nombre;
        if (!validatePhone(formData.telefono)) newErrors.telefono = translations[language].errores.telefono;
        if (!formData.mensaje.trim()) newErrors.mensaje = translations[language].errores.mensaje;
        if (!formData.aceptaTerminos) newErrors.aceptaTerminos = translations[language].errores.terminos;

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) console.log("Formulario válido");
    };

    return (
        <form className="p-8 bg-[#012858] space-y-6" onSubmit={handleSubmit}>
            <div>
                <h2 className="text-base font-bold mb-4 text-center text-white">
                    {translations[language].datos}
                </h2>

                <div className="mb-5">
                    <input
                        type="text"
                        placeholder={translations[language].nombre}
                        className={`w-full p-3 border rounded ${errors.nombre ? "border-red-500" : ""}`}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    />
                    {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
                </div>

                <div className="mb-5">
                    <input
                        type="tel"
                        placeholder={translations[language].telefono}
                        className={`w-full p-3 border rounded ${errors.telefono ? "border-red-500" : ""}`}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    />
                    {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
                </div>

                <div className="mb-6">
                    <textarea
                        rows="4"
                        className={`w-full p-3 border rounded ${errors.mensaje ? "border-red-500" : ""}`}
                        placeholder={translations[language].mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    ></textarea>
                    {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje}</p>}
                </div>
            </div>

            <div className="flex items-center">
                <Checkbox checked={formData.aceptaTerminos} onChange={(e) => setFormData({ ...formData, aceptaTerminos: e.target.checked })} />
                <p className="text-[10px] text-white italic p-2">
                    {translations[language].terminos}{" "}
                    <a href="#" className="text-[#009d28]">{translations[language].politica}</a>{" "}
                    <a href="#" className="text-[#ff0000]">{translations[language].verMas}</a>
                </p>
                {errors.aceptaTerminos && <p className="text-red-500 text-sm mt-1 w-full text-center">{errors.aceptaTerminos}</p>}
            </div>

            <button
                type="submit"
                className="block mx-auto w-[128px] h-[37px] bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold rounded-lg transition-colors duration-200"
            >
                {translations[language].enviar}
            </button>
        </form>
    );
}
