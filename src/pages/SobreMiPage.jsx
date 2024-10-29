import {IconGrid} from "./SobreMi/IconGrid.jsx";
import {InfoPersonal} from "./SobreMi/InfoPersonal.jsx";
import {MdDateRange} from "react-icons/md";
import {Divider} from "../components/helpers/Divider.jsx";





export const SobreMiPage = () => {
    return (
        <div className={"text-left"}>
            <Divider title={"Sobre Mi"}/>

            <div>

                <div className={"mt-2"}>
                    <p className={"info-data "}>¡Saludos! Soy <span className={"info-rubro"}>Piero</span>, un apasionado desarrollador con destacadas habilidades de comunicación y colaboración. Estoy en búsqueda de una posición a tiempo completo como front-end developer, back-end developer o full-stack developer, donde pueda aplicar mi experiencia para contribuir al éxito del equipo. Mi objetivo es continuar creciendo profesionalmente mientras aporto al desarrollo de soluciones innovadoras.</p>
                </div>
                <div className={"grid grid-cols-12 gap-10 mt-7 mb-5"}>
                    <div className={"custom-icon:col-span-7  col-span-12"}>
                        <div className={"grid grid-cols-12 gap-4"}>
                            <InfoPersonal/>
                        </div>
                        <div className="gap-8 flex">
                            {/* Botón de descargar CV */}
                            <a href="/CV_PIERO_RAMIREZ.pdf" download className="custom-button">
                                Descargar CV
                            </a>
                            {/* Botón de contactarme */}
                            <button className="custom-button">
                                Contactarme
                            </button>
                        </div>

                    </div>
                    <IconGrid/>
                </div>

                <div className={"grid grid-cols-12  gap-9 "}>
                    <div className={"custom-icon:col-span-6 col-span-12  "}>
                        <p className="info-sobre-mi font-bold ">Educacion</p>
                        <div className={"flex gap-2  info-background p-2"}>
                            <div className={"border rounded border-cyan-400"}></div>
                            <div className={"col-span-12 "}>
                                <div>
                                    <p className={"flex gap-1 items-center info-fecha text-gray-300 "}><MdDateRange
                                        size={15}/> 2020-2024</p>
                                    <h1 className={"info-centro-study my-2"}>Sistemas de la Informacion</h1>
                                    <p className="info-study">
                                        A lo largo de mi formación en Sistemas de la Información en el Instituto Superior Tecnológico IDAT,
                                        desarrollé un entendimiento profundo de las estrategias y técnicas esenciales para la creación de software de alta calidad.
                                        Me especialicé en el diseño, desarrollo y mantenimiento de sistemas complejos, utilizando tanto tecnologías de backend como de frontend.
                                        Además, adquirí experiencia en la gestión de proyectos, aplicando metodologías ágiles y trabajando en equipos multidisciplinarios.
                                        Esta trayectoria me ha proporcionado las herramientas necesarias para abordar desafíos de software de manera estructurada,
                                        priorizando la eficiencia, escalabilidad y seguridad.
                                    </p>
                                </div>
                                <div className={"mt-5"}>
                                    <p className={"flex gap-1 items-center info-fecha text-gray-300 "}><MdDateRange
                                        size={15}/> 2023-2024</p>
                                    <h1 className={"info-centro-study my-2"}>Bootcamp en CodiGo by Tecsup</h1>
                                    <p className="info-study">
                                        Tras completar un bootcamp en Java Full Stack, adquirí un conocimiento sólido en
                                        el uso de Spring Boot para el desarrollo de aplicaciones backend y la creación
                                        de APIs REST eficientes. Durante el programa, me especialicé en la
                                        implementación de soluciones escalables y seguras, enfocadas en la interacción
                                        entre frontend y backend. También trabajé en proyectos que aplicaban
                                        metodologías ágiles, lo que me permitió colaborar en equipos y gestionar tareas
                                        de forma organizada.
                                    </p>

                                </div>

                            </div>


                        </div>


                    </div>
                    <div className={"custom-icon:col-span-6 col-span-12 "}>
                        <p className="info-sobre-mi font-bold ">Experiencia</p>
                        <div className={"flex gap-2  info-background p-2"}>
                            <div className={"border rounded border-cyan-400"}></div>
                            <div className={"col-span-12 "}>
                                <div>
                                    <p className={"flex gap-1 items-center info-fecha text-gray-300 "}><MdDateRange
                                        size={15}/> 2020-2024</p>
                                    <h1 className={"info-centro-study my-2"}>Experiencia en Proyectos Personales</h1>
                                    <p className="info-study">
                                        He desarrollado habilidades significativas en el desarrollo de servicios web, especialmente en la creación de APIs REST. He trabajado con tecnologías como Java utilizando Spring y Python empleando Flask y Django. A través de proyectos personales, he enfrentado diversos desafíos técnicos, lo que me ha permitido mejorar mis competencias en desarrollo backend y familiarizarme con tecnologías clave para crear servicios web eficientes.
                                    </p>
                                </div>


                            </div>


                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}
