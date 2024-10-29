import {Divider} from "../components/helpers/Divider.jsx";
import {FaCode} from "react-icons/fa";
import {useState} from "react";

export const ProyectosPage = () => {


    const [activeSection, setActiveSection] = useState('personales');

    const showPersonales = () => {
        setActiveSection('personales');
    };
    const showFreenlaces = () => {
        setActiveSection('freenlaces');
    };
    return (
       <div className={"text-left"}>
           <Divider title={"Explora Mis Proyectos"} />
            <div>
                <p className={"info-data"}>
                    Adéntrate en un universo donde la innovación se combina con la creatividad.
                    En este espacio, cada proyecto va más allá del simple código y diseño; es una
                    manifestación de dedicación, compromiso y entusiasmo. Te invito a explorar ejemplos
                    que no solo evidencian mis habilidades técnicas, sino también el impacto positivo
                    que genero en cada cliente.
                </p>

            </div>
            <div className={"grid-cols-12 mt-16"}>
                <div className={"col-span-12  flex justify-center items-center gap-3"}>
                    <FaCode size={40}/>
                    <h3 className={"text-2xl font-bold"}>Proyectos</h3>
                </div>
                <div className={"col-span-12  flex justify-center items-center mt-5"}>
                    <button
                        onClick={showPersonales}
                        className={`w-36 h-14 rounded-t-2xl font-bold ${activeSection === 'personales' ? 'bg-white text-black' : 'bg-gray-600 text-white'}`}
                    >
                        Personales
                    </button>
                    <button
                        onClick={showFreenlaces}
                        className={`h-14 w-36 rounded-t-2xl font-bold ${activeSection === 'freenlaces' ? 'bg-white text-black' : 'bg-gray-600 text-white'}`}
                    >
                        Freenlaces
                    </button>
                </div>

                {activeSection === 'personales' && (
                    <div className="visible mt-5">
                        <div className={"grid grid-cols-12"}>
                            <div className={"col-span-12"}>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg  mx-auto info-background">
                                    <img className="w-full object-cover" src="/./src/assets/pokemon.png"
                                         alt="Imagen superior"/>
                                    <div className="px-2 py-4">
                                        <h1 className="font-bold text-xl mb-2">Pokemon</h1>
                                        <p className="text-amber-50 info-data text-base">
                                            una Pokedex interactiva que consume una API de Pokémon, donde los usuarios
                                            pueden buscar cualquier Pokémon, ver sus habilidades únicas y consultar sus
                                            estadísticas
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2 text-center">
                                        <a href="https://pokemon-app-three-theta.vercel.app/"
                                           className="w-32 btn-pagina h-10 bg-red-700 rounded text-white inline-block text-center leading-10">
                                            Ver página
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className={"col-span-12 mt-5"}>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg  mx-auto info-background">
                                    <img className="w-full object-cover" src="/./src/assets/cart-ecommerce.png"
                                         alt="Imagen superior"/>
                                    <div className="px-2 py-4">
                                        <h1 className="font-bold text-xl mb-2">Carrito de Compras</h1>
                                        <p className="text-amber-50 info-data text-base mb-4">
                                            Gestiona tus productos de manera eficiente con nuestro carrito de compras.
                                            Agrega artículos que te interesan, visualiza sus detalles y elimina los que
                                            ya no deseas <br/> React - Redux.
                                        </p>

                                    </div>
                                    <div className="px-6 pt-4 pb-2 text-center">
                                        <a href="https://cart-eccomerce.vercel.app/"
                                           className="w-32 btn-pagina h-10 bg-red-700 rounded text-white inline-block text-center leading-10">
                                            Ver página
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeSection === 'freenlaces' && (
                    <div className="visible mt-5">
                        <p>Contenido Freenlaces</p>
                    </div>
                )}

            </div>

       </div>
    )
}
