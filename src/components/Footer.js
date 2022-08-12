import React from "react";
import TailwindLogo from "./../images/tailwindcss-dark.svg";

const Footer = () => {
    const Links = [
        {
            name: "email",
            href: "#",
            icon: "fa-solid fa-envelope"
        },
        {
            name: "linkedIn",
            href: "https://www.linkedin.com/in/leslynomberto/",
            icon: "fa-brands fa-linkedin-in"
        },
        {
            name: "Github",
            href: "https://www.github.com/LeslyN/",
            icon: "fa-brands fa-github"
        }
    ];
    return (
        <div className="bg-red-400 h-96 flex justify-center items-center flex-col">
            <ul className="flex justify-center items-center flex-row">
                {
                    Links.map((link, index) => {
                        return (
                            <li key={index} className="px-6">
                                <a href={link.href}><i className={ link.icon }></i></a>
                            </li>
                        );

                    })

                }
            </ul>
            <div className="flex justify-center items-center flex-col">
                <div className="space-x-2 space-y-2">
                    <span>Lesly Nomberto</span>
                    <i className="fa-solid fa-copyright"></i><span>{new Date().getFullYear()}</span>
                </div>
                <span><img src={TailwindLogo} className="flex justify-center items-center w-32 h-16" alt="logo tailwind"/></span>
            </div>

        </div>
    );
};

export default Footer;