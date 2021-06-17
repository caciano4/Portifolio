import React from "react"
import Area from "./style.js"
import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <Area>
            <ul>
                <li>
                   <NavLink exact path to="/" activeClassName="active-purple">
                        Home
                   </NavLink>
                </li>
                <li>
                    <NavLink to="/sobre" activeClassName="active-blue">
                         Sobre
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projetos" activeClassName="active-pink">
                         Projetos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contato" activeClassName="active-red">
                         Contato
                    </NavLink>
                </li>
            </ul>
        </Area>
    );
};

export default NavBar;
