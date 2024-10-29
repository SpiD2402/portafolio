import { FaJava, FaPython, FaDocker, FaHtml5, FaBootstrap, FaReact, FaGithub, FaJs } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { SiSpringboot } from 'react-icons/si';
import { BiLogoPostgresql, BiLogoFlask, BiLogoTailwindCss } from 'react-icons/bi';

// eslint-disable-next-line react/prop-types
const Icon = ({ Component, size, className }) => (
    <Component size={size} className={className} />
);
const iconGroups = [
    [
        { Component: FaJava, className: "text-red-600" },
        { Component: FaPython, className: "text-yellow-300" },
        { Component: FaDocker, className: "text-cyan-500" },
        { Component: FaHtml5, className: "text-orange-600" },
        { Component: FaBootstrap, className: "text-fuchsia-800" }
    ],
    [
        { Component: DiCss3, className: "text-blue-500" },
        { Component: FaReact, className: "text-cyan-400" },
        { Component: FaGithub, className: "text-white" },
        { Component: FaJs, className: "text-yellow-400" },
        { Component: BiLogoPostgresql, className: "text-cyan-700" }
    ],
    [
        { Component: SiSpringboot, className: "text-green-400" },
        { Component: BiLogoFlask, className: "text-gray-200" },
        { Component: BiLogoTailwindCss, className: "text-sky-400" }
    ]
];

export const IconGrid = () => {
    return (
        <div className="custom-icon:col-span-5 col-span-12">
            <p className="info-sobre-mi font-bold text-center">Mis Habilidades</p>

            {/* Iterar sobre los grupos de iconos */}
            {iconGroups.map((group, index) => (
                <div key={index} className="flex gap-3 justify-center mb-6 mt-3">
                    {group.map(({ Component, className }, idx) => (
                        <Icon key={idx} Component={Component} size={50} className={className} />
                    ))}
                </div>
            ))}
        </div>
    );
}
