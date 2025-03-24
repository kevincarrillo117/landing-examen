import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default function Form() {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        mensaje: "",
        aceptaTerminos: false,
    });
    const [errors, setErrors] = useState({});

    const validatePhone = (phone) => /^\d{10}$/.test(phone); // Ejemplo para México

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.nombre.trim()) newErrors.nombre = "Nombre requerido";
        if (!validatePhone(formData.telefono))
            newErrors.telefono = "Teléfono inválido";
        if (!formData.mensaje.trim()) newErrors.mensaje = "Mensaje requerido";
        if (!formData.aceptaTerminos)
            newErrors.aceptaTerminos = "Debes aceptar los términos";

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0)
            console.log("Formulario válido");
    };

    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            aceptaTerminos: e.target.checked,
        });
    };

    return (
        <form className="p-8 bg-[#012858] space-y-6" onSubmit={handleSubmit}>
            <div>
                <h2 className="text-base font-bold mb-4 text-center text-white">
                    TUS DATOS
                </h2>

                <div className="mb-5">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className={`w-full p-3 border rounded ${errors.nombre ? "border-red-500" : ""
                            }`}
                        onChange={(e) =>
                            setFormData({ ...formData, nombre: e.target.value })
                        }
                    />
                    {errors.nombre && (
                        <p className="text-red-500 text-sm">{errors.nombre}</p>
                    )}
                </div>

                <div className="mb-5">
                    <input
                        type="tel"
                        placeholder="Teléfono"
                        className={`w-full p-3 border rounded ${errors.telefono ? "border-red-500" : ""
                            }`}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                telefono: e.target.value,
                            })
                        }
                    />
                    {errors.telefono && (
                        <p className="text-red-500 text-sm">
                            {errors.telefono}
                        </p>
                    )}
                </div>

                <div className="mb-6">
                    <textarea
                        rows="4"
                        className={`w-full p-3 border rounded ${errors.mensaje ? "border-red-500" : ""
                            }`}
                        y
                        placeholder="Escribe tu mensaje"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                mensaje: e.target.value,
                            })
                        }
                    ></textarea>
                    {errors.mensaje && (
                        <p className="text-red-500 text-sm">{errors.mensaje}</p>
                    )}
                </div>
                <div className="w-582px h-2px bg-[#ffff]"></div>
            </div>
            <div class="w-full">
                <img
                    src="/img/Linea.png"
                    alt="barra-form"
                    class="w-full h-auto"
                />
            </div>
            <div className="flex items-center">
                <Checkbox
                    checked={formData.aceptaTerminos}
                    onChange={handleCheckboxChange}
                />
                <p className="text-[10px] text-white italic p-2">
                    Al proporcionar mi número de teléfono a The Mendoza Law
                    Firm, acepto y reconozco que The Mendoza Law.{" "}
                    <a href="#">Política de privacidad.</a>{" "}
                    <a href="#">Ver más.</a>
                </p>
                {errors.aceptaTerminos && (
                    <p className="text-red-500 text-sm mt-1 w-full text-center">
                        {errors.aceptaTerminos}
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="block mx-auto w-[128px] h-[37px] bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold rounded-lg transition-colors duration-200"
            >
                ENVIAR
            </button>
        </form>
    );
}
