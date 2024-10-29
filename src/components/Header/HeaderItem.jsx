import { useState } from 'react';
import {SidebarItem} from "../Sidebar/SidebarItem.jsx";
import  'animate.css'
import {Link} from "react-router-dom";

export const HeaderItem = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);




    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={"grid grid-cols-12 h-full  p-4 relative "}>
            <div className={"col-span-10 h-full flex items-center justify-start"}>
                <Link className={"text-2xl"} >SpiD</Link>
            </div>
            <div
                className={"col-span-2 flex items-center justify-end text-amber-50 text-4xl cursor-pointer relative z-20"}
                onClick={toggleMenu}>
                {/* Cambia el icono dependiendo del estado del menú */}
                {isMenuOpen ? (
                    <ion-icon name="close-circle-outline"></ion-icon>// Icono de "X"
                ) : (
                    <ion-icon name="menu-outline"></ion-icon> // Icono de menú
                )}
            </div>
            {/* Menú lateral */}
            {isMenuOpen && (
                <div
                    className={"flex justify-center absolute right-0 top-full  h-screen w-72 bg-sidebar-color  z-50"}>
                        <SidebarItem/>
                </div>
            )}
            {/* Cerrar el menú al hacer clic fuera de él */}
            {isMenuOpen && (
                <div className={"fixed inset-0 bg-black opacity-0 z-0"} onClick={toggleMenu}></div>
            )}
        </div>
    );
};
