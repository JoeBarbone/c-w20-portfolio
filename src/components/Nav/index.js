import React from "react";
import "../../css/style.css";
import { NavLink } from "react-router-dom"

function Nav() {

    return (


    //     <Nav>
    //     <NavLink 
    //       to="/"
    //       className={({ isActive }) => (isActive ? "link-active" : "link-non-active")}
    //     >
    //       About
    //     </NavLink>

    //     <NavLink 
    //       to="/portfolio"
    //       className={({ isActive }) => (isActive ? "link-active" : "link-non-active")}
    //     >
    //       Portfolio
    //     </NavLink>

    //     <NavLink 
    //       to="/contact"
    //       className={({ isActive }) => (isActive ? "link-active" : "link-non-active")}
    //     >
    //       Contact
    //     </NavLink>
    //   </Nav>



        <header className="d-flex justify-content-between">

            <h1 className="d-flex align-items-center"><a href="/">Joseph Barbone</a></h1>

            <nav className="d-flex align-items-center">

                <ul className="d-flex">

                    <li className="mx-3">
                        <a href="/">About Me</a>
                    </li>

                    <li className="mx-3">
                        <a href="/portfolio">Portfolio</a>
                    </li>

                    <li className="mx-3">
                        <a href="/contact">Contact</a>
                    </li>

                    <li className="mx-3">
                        <a href="/resume">Resume</a>
                    </li>

                </ul>
            
            </nav>

        </header>

    )

}


export default Nav;