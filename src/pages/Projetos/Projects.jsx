import React,{useState} from 'react'
import AreaProjects from "./styledProjects";
import API from '../../image/cap2.png'
import Block from "../../components/block/Block";
import Modal from "../../components/Modal/Modal";
import {Count} from "../../components/Count/Count";
import NLW from '../../image/nlw.png'
import Petfood from '../../image/Petfood.png'

const Projects = ({hidden}) => {
    let [isShowModal,setIsShowModal] = useState(false)

    return (
        <AreaProjects>
            <div className="bg-principal">

            </div>
            {hidden ? <> <button onClick={()=>  setIsShowModal(true)}> start</button><Count /> </>:null}

            <div className="projects-flex">
                p => <Block
                    firstImage={NLW} firstTitle={'Pomodoro'} firstDescription={'Projeto Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. A técnica consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, separados por breves intervalos'}
                    secondImage={API} secondTitle={'API'} secondDescription={'Aplicação em Node.js tem Interação com API (consumindo e criando API) Neste Projeto está Consumindo API no back-end e mandando informações para o Fron-end É simples, mas muito importante, porque faz parte do dia do desenvolvedor'}
                />
                {isShowModal ? <Modal onClose={() => setIsShowModal(false) }/> : null}

               <Block
                    firstImage={Petfood} firstTitle={'PetFood'} firstDescription={'Um Projeto de MarktPlace Com alguns lojas posicionadas no mapa quando escolhemos alguma podemos escolher os produtos que pertenece a cada Petshoop posteriormente Finalizar a Compra.'}
                    // secondImage={API} secondTitle={'api'} secondDescription={'description'}
                />
            </div>

        </AreaProjects>
    );
}
export default Projects;