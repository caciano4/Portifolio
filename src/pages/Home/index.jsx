import React from "react";
import {Link} from "react-router-dom";
import Area from "./styled";
import Button from "../../components/button/Button";
import Typing from '../../components/Typing/Typing';
// import Imagens //
import Developer from '../../image/dev.svg';
import github from '../../image/hub.svg';
import whats from '../../image/whats.svg'
import linkedin from '../../image/linkedin.svg'
import instagran from '../../image/instagram.svg'
import facebook from '../../image/facebook.svg'

const Body = () => {

    return (
        <Area>
            <div className="Flex">
                <div className="left">
                    <div className="LeftHome">
                        <p>Me Chamo</p>
                        <h2><span> &lt;</span> Walter Caciano<span> &gt;</span></h2>
                        <Typing/>
                        <ul>
                            <li className="lista" ><a target="blank" href="https://github.com/caciano4">
                                <img className="git" alt="github" src={github}/></a></li>

                            <li><a target="blank" href="https://www.linkedin.com/in/walter-caciano-090a17140/">
                                <img alt="Linkedin" src={linkedin}/></a></li>

                            <li><a target="blank" href="https://www.facebook.com/walter.caciano">
                                <img alt="Facebook" src={facebook}/></a></li>
                        </ul>
                    </div>
                    <Button Children={<p>Saiba Mais</p>} link={'/sobre'}/>
                </div>
                <div >
                    <img className="img" src={Developer} alt="Developer"/>
                </div>
            </div>
        </Area>
    );
};
export default Body;

