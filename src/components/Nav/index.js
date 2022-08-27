import React from "react";
import "../../css/style.css";

function Nav() {

    return (

        <header className="d-flex justify-content-between">

            <h1 className="d-flex align-items-center"><a href="/">Joe Barbone</a></h1>

            <nav className="d-flex align-items-center">

                <ul className="d-flex">

                    <li className="mx-3">
                        <a href="#about">About me</a>
                    </li>

                    <li className="mx-3">
                        <a href="#portfolio">Portfolio</a>
                    </li>

                    <li className="mx-3">
                        <a href="#contact">Contact</a>
                    </li>

                    <li className="mx-3">
                        <a href="#resume">Resume</a>
                    </li>

                </ul>
            
            </nav>

        </header>

    )

}


export default Nav;