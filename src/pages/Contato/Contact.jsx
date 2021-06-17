import React from 'react'
import AreaContact from './styledContact.js'
import Letter from '../../image/letter.gif'
// import de imagens //
import linkedin from '../../image/linkedin.svg'
import facebook from '../../image/facebook.svg'
import whatsapp from '../../image/whats.svg'
import github from '../../image/hub.svg'
import mail from '../../image/mail.svg'

const Contact = () => {
    return (
        <AreaContact>
            <div className="all-contacts">
                <div className="left">
                    <img className="carta" src={Letter} alt="Carta"/>
                </div>
                <div className="right">

                    <h1><span>&lt;</span> Contato <span>&gt;</span></h1>

                    <p>Espero que tenha gostado do meu portfólio.<br/> Caso queria
                        entrar em contato, esses são <br/> os meios aonde posso ser encontrado.</p>

                    <div className="right-contacts">
                        <div className="right-contacts-inf">

                            <div className="right-contacts-flex">
                                <a href="mailto:caciano4@gmail.com">
                                    <img src={mail} alt="Mail"/></a>
                                <div>
                                    <h5>E-MAIL</h5>
                                    <a href="mailto:caciano4@gmail.com">Caciano4@gmail.com</a>
                                </div>
                            </div>
                            <div className="right-contacts-flex">
                                <a target="blank"
                                   href="https://api.whatsapp.com/send/?phone=%2B5545999647440&text&app_absent=0">
                                    <img src={whatsapp} alt="Whatsapp"/>
                                </a>
                                <div>
                                    <h5>WHATSAPP</h5>
                                    <a target="blank"
                                       href="https://api.whatsapp.com/send/?phone=%2B5545999647440&text&app_absent=0">
                                        (45) 9 9964-7440</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5>Redes Sociais</h5>
                            <div>
                                <a target="blank" href="https://github.com/caciano4">
                                    <img src={github} alt=""/></a>

                            </div>
                            <div className="right-contacts-icon">
                                <a target="blank" href="https://www.linkedin.com/in/walter-caciano-090a17140/">
                                    <img src={linkedin} alt="Linkedin"/> </a>
                                <a target="blank" href="https://www.facebook.com/walter.caciano">
                                    <img src={facebook} alt="Facebook"/> </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AreaContact>
    );
}

export default Contact;