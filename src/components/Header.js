import React,{ useState } from "react";
import personalLogo from "../images/icon_L_whiteLetter_black.svg";
import { MenuItems } from "./menuItems";
import Button from "./Button";

const Header = () => {
    const [open, setOpen] = useState(false);
    return(
        <div className="shadow-sm w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <span>
                    <img src={personalLogo} className="App-logo" alt="logo"/>
                </span>
                <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden">
                    <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 ":"top-[-490px]"}`}>
                    {
                        MenuItems.map((item, index) => {
                            return(
                                <li key={index} className="md:ml-8 text-sm md:my-0 my-7">
                                    <a href={item.url} className="text-gray-800 hover:text-gray-500 duration-500">{item.title}</a>
                                </li>
                            );
                        })
                    }
                    <Button>Resume</Button>
                    <div className="switch md:ml-8 text-sm md:my-0 my-7">
                        <input type="checkbox" id="checkbox"/>
                        <label htmlFor="checkbox" className="label">
                            <span className="moon"/>
                            <span className="sun"/>
                            <div className="circle"></div>
                        </label>
                    </div>
                </ul>
            </div>
        </div>
    );
};
export default Header;