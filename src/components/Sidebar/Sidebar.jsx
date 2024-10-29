import {SidebarItem} from "./SidebarItem.jsx";
import {Link} from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className={"grid grid-cols-12 h-full   content-evenly"}>
            <div className={"col-span-12 border-gradient-cyan flex  text-6xl mx-auto p-5 hover"}>
                <Link to={"/"}>SpiD</Link>
            </div>
            <div className={"col-span-12  justify-center flex "}>
                <SidebarItem/>
            </div>
        </div>
    )
}
