import Form from './components/Form';

export default function App() {
    return (
        <div class="relative flex flex-col min-h-screen">
            <div class="w-full">
                <img src="/img/Linea.png" alt="barra" class="w-full h-auto px-14 pt-24" />
            </div>

            <div class="flex flex-wrap">
                <div class="w-2/5 hidden md:flex items-end overflow-hidden ">
                    <img
                        src="/img/Capa-10.png"
                        alt="foto_enfermeros"
                        class="w-full origin-center transform scale-110 object-cover translate-y-[5vh]"
                    />
                </div>

                <div class="min-h-screen py-8 px-4 w-full md:w-3/5 flex flex-col justify-center">
                    <div class="text-white text-center mx-auto">
                        <h1 class="text-lg font-bold mb-4">
                            ¡Quieres ir a{" "}
                            <b class="text-[#009d28]">
                                trabajar legalmente en EE. UU.
                            </b>{" "}
                            como enfermera con la{" "}
                            <b class="text-[#009d28]">visa TN</b> y disfrutar de
                            oportunidades que{" "}
                            <b class="text-[#009d28]">transformarán tu futuro,</b>{" "}
                            regístrate.
                        </h1>
                        <p class="text-sm opacity-90">
                            Déjanos tus datos y nos pondremos en contacto contigo lo
                            antes posible.
                        </p>
                    </div>

                    <div class="mt-6 max-w-lg mx-auto bg-[#012858] rounded-xl shadow-lg overflow-hidden">
                        <Form />
                    </div>
                </div>
            </div>
        </div>

    );
}