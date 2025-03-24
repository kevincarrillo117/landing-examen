import React, { useState } from "react";
import Form from "./components/Form";

export default function App() {
    const [language, setLanguage] = useState("es");

    return (
        <div className="relative flex flex-col min-h-screen">
            <div className="w-full">
                <img src="/img/Linea.png" alt="Barra Landing" className="w-full h-auto px-14 pt-24" />
            </div>

            <div className="flex flex-wrap">
                <div class="w-2/5 hidden md:flex items-end overflow-hidden ">
                    <img
                        src="/img/Capa-10.png"
                        alt="Foto enfermeros para visa de trabajo"
                        class="w-full origin-center transform scale-110 object-cover translate-y-[5vh]"
                    />
                </div>

                <div className="min-h-screen py-8 px-4 w-full md:w-3/5 flex flex-col justify-center">
                    <div className="text-white text-center mx-auto">
                    <h1 className="text-lg font-bold mb-4">
                        {language === "es" ? (
                            <>
                                ¡Quieres ir a <b className="text-[#009d28]">trabajar legalmente en EE. UU.</b> como enfermera con la{" "}
                                <b className="text-[#009d28]">visa TN</b> y disfrutar de oportunidades que{" "}
                                <b className="text-[#009d28]">transformarán tu futuro,</b> regístrate.
                            </>
                        ) : (
                            <>
                                Do you want to <b className="text-[#009d28]">work legally in the U.S.</b> as a nurse with the{" "}
                                <b className="text-[#009d28]">TN visa</b> and enjoy opportunities that{" "}
                                <b className="text-[#009d28]">will transform your future?</b> Register now.
                            </>
                        )}
                    </h1>
                        <p className="text-sm opacity-90">
                            {language === "es" ? "Déjanos tus datos y nos pondremos en contacto contigo lo antes posible." : "Leave your details, and we will contact you as soon as possible."}
                        </p>
                    </div>

                    <div className="mt-6 max-w-lg mx-auto bg-[#012858] rounded-xl shadow-lg overflow-hidden">
                        <Form language={language} />
                    </div>

                    <div className="text-center mt-4">
                        <button onClick={() => setLanguage("es")} className={`mx-2 ${language === "es" ? "font-bold" : ""}`}>Español</button>
                        <button onClick={() => setLanguage("en")} className={`mx-2 ${language === "en" ? "font-bold" : ""}`}>English</button>
                    </div>
                </div>
            </div>
        </div>
    );
}