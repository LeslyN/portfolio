import personalLogo from "./images/icon_L_whiteLetter_black.svg";
import "./css/App.css";
import React  from "react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav className="flex justify-between">
                    <img src={personalLogo} className="App-logo" alt="logo" />
                    <div className="flex flex-col md:flex-row md:space-x-8 justify-between items-end md:items-baseline">
                        <ul className="flex flex-col md:flex-row md:space-x-8">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                        <div className="md:flex flex-col md:flex-row md:space-x-8 text-right">
                            <button className="download">Download CV</button>
                            <div className="switch">
                                <input type="checkbox" id="checkbox"/>
                                <label htmlFor="checkbox" className="label">
                                    <span className="moon"/>
                                    <span className="sun"/>
                                    <div className="circle"></div>
                                </label>

                            </div>
                        </div>

                    </div>
                </nav>
            </header>
            <body className="app-body">

            </body>
            <div className="container">
            </div>

        </div>
    );
}

export default App;
