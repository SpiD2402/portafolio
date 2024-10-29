import { Route, Routes} from "react-router-dom";
import {InicioPage} from "../pages/InicioPage.jsx";
import {SobreMiPage} from "../pages/SobreMiPage.jsx";
import {ServiciosPage} from "../pages/ServiciosPage.jsx";
import {ProyectosPage} from "../pages/ProyectosPage.jsx";
import {ContactamePage} from "../pages/ContactamePage.jsx";


export const RouterPortafolio = () => {
    return (

            <Routes>
                <Route path={"/"} element={<InicioPage/>}/>
                <Route path={"/sobre-mi"} element={<SobreMiPage/>}/>
                <Route path={"/servicios"} element={<ServiciosPage/>}/>
                <Route path={"/proyectos"} element={<ProyectosPage/>}/>
                <Route path={"/contactame"} element={<ContactamePage/>}/>
            </Routes>


    )
}
