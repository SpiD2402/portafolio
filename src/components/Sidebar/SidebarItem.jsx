import {Link, useLocation} from "react-router-dom";

var items =[
    {
        "name":"Inicio",
        "icon": <ion-icon name="home-sharp"></ion-icon>,
        "path":"/"
    },
    {
        "name":"Sobre Mi",
        "icon": <ion-icon name="person-sharp"></ion-icon>,
        "path":"/sobre-mi"
    },
    {
        "name":"Servicios",
        "icon": <ion-icon name="list-sharp"></ion-icon>,
        "path":"/servicios"
    },
    {
        "name":"Proyectos",
        "icon": <ion-icon name="file-tray-stacked-sharp"></ion-icon>,
        "path":"/proyectos"
    },
    {
        "name": "Contactame",
        "icon": <ion-icon name="chatbubble-ellipses-sharp"></ion-icon>,
        "path":"/contactame"
    }
]


export const SidebarItem = () => {
    const location = useLocation()
    return (
        <ul>
            {items.map((item, index) => (
                <li className={"my-8  border-gradient-cyan flex cursor-pointer gap-4"} key={index}>
                    {/* Usar el componente Link para la navegación */}
                    <Link to={item.path} className={`  flex items-center gap-4 mb-1 ${location.pathname == item.path ? "text-cyan-500"  : "" } `}>
                        <span className={`${location.pathname == item.path ? "text-cyan-700"  : "text-white" } `} style={{ fontSize: '24px'}}>{item.icon}</span>
                        <p>{item.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
