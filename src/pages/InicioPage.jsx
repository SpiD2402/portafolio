import {useTypingEffect} from "../hooks/useTypingEffect.js";
import {Link} from "react-router-dom";

export const InicioPage = () => {

    const words = ["Backend Developer", "Frontend Developer"];
    const {displayedWord} = useTypingEffect(words)

    return (
        <div className={"grid grid-cols-12 h-full"}>
            <div
                className={" custom-page:col-span-8 col-span-12     custom-page:text-left   custom-page:content-center p-7 "}>
                <h1 className={"text-amber-50 info-name"}>Hola, mi nombre es <span className={"info-rubro"}>Piero Paolo</span> </h1>
                <p className={"info-name text-amber-50"}>
                    Soy <span className="typing-effect  info-rubro">{displayedWord}</span>
                    <span className="cursor info-rubro">|</span> {/* Barra de cursor */}
                </p>
                <p className={"text-amber-50 info-data"}>Entusiasmado por la tecnología, me siento preparado para
                    enfrentar con </p>
                <p className={"text-amber-50 info-data"}>alegría los desafíos que el fascinante ámbito de la
                    programación me presenta.</p>

                <Link to={"/sobre-mi"}>
                    <button
                        className=" custom-page:mx-0 mx-auto  custom-button ">
                        Sobre Mi
                        <div className="arrow-down"></div>
                    </button>
                </Link>
            </div>
            <div className={"custom-page:col-span-4  items-center justify-center flex  col-span-12  "}>
                <img src="/./src/assets/pngwing.com.png" width={300}/>
            </div>
        </div>
    );
}
