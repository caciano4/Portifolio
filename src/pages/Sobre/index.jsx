import React from 'react'
import Area from './style.js'
import Typist from 'react-typist';
import Typical from 'react-typical'
import Typing from "../../components/Typing/Typing";
import Cubics from "../../components/Cubics/Cubics";
//Importando Imagens //
import Github from '../../image/hub.svg'
import ReactIMG from '../../image/React.svg'
import Vue from '../../image/Vue.svg'
import npm from '../../image/npm.svg'
import json from '../../image/json.png'
import html from '../../image/html.svg'
import css from '../../image/css.svg'
import javascript from '../../image/javascript.svg'
import git from '../../image/git.svg'
import Figma from '../../image/figma.svg'
import vscode from '../../image/vscode.svg'
import axios from '../../image/axios.png'
import mysql from '../../image/mysql.svg'
import sql from '../../image/sql.png'
import PHP from '../../image/php.svg'
import laravel from '../../image/laravel.png'
import Bootstrap from '../../image/bootstrap.svg'
import yarn from '../../image/yarn.svg'
import styledComponents from '../../image/styled-components.png'
import node from '../../image/node.svg'
import WordPress from '../../image/wordpress.svg'
import docker from '../../image/docker.svg'
import Button from "../../components/button/Button";


const Sobre = () => {
    return (
        <Area>
            <div>
                <div className="fake-img">
                    <div className="About_me">
                        <Typist>
                            <h1><span>&lt;</span> Walter Caciano <span>&gt;</span></h1>
                            <p>
                                Sou Walter Caciano, 28 Anos
                                Apaixonado Por Tecnologia 🤗.
                                Desenvolvedor de Software,Tenho uma atração pelo Desenvolvimento WEB 🖥
                                Porem Tenho muito Interesse em Aprender Desenvolvimento Mobile 📱.
                                Aberto para conhecer novas pessoas e culturas, ganhar novas Habilidades para crescimento
                                pessoal/profissional
                                Com o foco no auto-desenvolvimento 🏆. Adoro explorar novas tecnologias e aproveitá-las
                                para
                                resolver problemas da vida real ✨.
                            </p>
                        </Typist>
                    </div>
                </div>
                <div className="About_me_partTwo">
                    <Typing className={'Typ'}/>
                    <div className="About_me_skills_wrapper">
                        <div className="tools">
                            <Typical
                                steps={[
                                    'Habilidades', 7000,
                                    'skills', 7000,
                                ]}
                                loop={Infinity}
                                wrapper="h1"
                            />
                        </div>
                        <div className="wrapper_skills">
                            <div className="About_me_skills">
                                <Cubics
                                    img={ReactIMG}
                                    title="React"
                                    children="O React é uma biblioteca JavaScript de código aberto com
                                        foco em criar interfaces de usuário em páginas web. É mantido pelo
                                        Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores
                                         individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb,
                                          SeatGeek, HelloSign, Walmart e outros."
                                    link="https://pt.wikipedia.org/wiki/React_(JavaScript)"
                                />
                                <Cubics
                                    img={Vue}
                                    title="Vue"
                                    children="Vue.js é um framework JavaScript de código-aberto, focado no
                                         desenvolvimento de interfaces de usuário e aplicativos de página única."
                                    link="https://pt.wikipedia.org/wiki/Vue.js"
                                />
                                <Cubics img={json}
                                        title="Json"
                                        children="Em computação, JSON, um acrônimo de JavaScript Object Notation,
                                         é um formato compacto, de padrão aberto independente, de troca de dados
                                         simples e rápida entre sistemas, especificado por Douglas Crockford em 2000,
                                          que utiliza texto legível a humanos, no formato atributo-valor."
                                        link="https://pt.wikipedia.org/wiki/JSON"
                                />
                                <Cubics img={css}
                                        title="CSS"
                                        children="Cascading Style Sheets é um mecanismo para adicionar estilo a um
                                         documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar
                                          contido dentro das tags <style>. Também é possível, em vez de colocar
                                          a formatação dentro do documento, criar um link para um arquivo CSS que
                                          contém os estilos."
                                        link="https://pt.wikipedia.org/wiki/Cascading_Style_Sheets"
                                />
                                <Cubics img={html}
                                        title="HTML"
                                        children="HTML abreviação para a expressão inglesa HyperText Markup Language,
                                         que significa:'Linguagem de Marcação de Hipertexto'' é uma linguagem de
                                          marcação utilizada na construção de páginas na Web. Documentos HTML podem
                                           ser interpretados por navegadores. A tecnologia é fruto da junção entre os
                                           padrões HyTime e SGML."
                                        link="https://pt.wikipedia.org/wiki/HTML"
                                />
                                <Cubics img={javascript}
                                        title="JavaScript"
                                        children="JavaScript é uma linguagem de programação interpretada estruturada,
                                         de script em alto nível com tipagem dinâmica fraca e multiparadigma.
                                         Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias
                                         da World Wide Web."
                                        link="https://pt.wikipedia.org/wiki/JavaScript"
                                />
                            </div>
                            <div className="About_me_skills">
                                <Cubics img={sql}
                                        title="SQL"
                                        children="Structured Query Language, ou Linguagem de Consulta Estruturada
                                         ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados
                                          relacional. Muitas das características originais do SQL foram inspiradas
                                           na álgebra relacional."
                                        link="https://pt.wikipedia.org/wiki/SQL"
                                />
                                <Cubics img={PHP}
                                        title="PHP"
                                        children="PHP é uma linguagem interpretada livre, usada originalmente apenas
                                         para o desenvolvimento de aplicações presentes e atuantes no lado do servidor,
                                          capazes de gerar conteúdo dinâmico na World Wide Web."
                                        link="https://pt.wikipedia.org/wiki/PHP"
                                />
                                <Cubics img={laravel}
                                        title="Laravel"
                                        children="Laravel é um framework PHP livre e open-source criado por Taylor
                                         B. Otwell para o desenvolvimento de sistemas web que utilizam o padrão MVC"
                                        link="https://pt.wikipedia.org/wiki/Laravel"
                                />
                                <Cubics img={Bootstrap}
                                        title="Bootstrap"
                                        children="Bootstrap é um framework web com código-fonte aberto para
                                        desenvolvimento de componentes de interface e front-end para sites e
                                        aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design
                                         para a tipografia, melhorando a experiência do usuário em um site amigável
                                          e responsivo."
                                        link="https://pt.wikipedia.org/wiki/Bootstrap_(framework_front-end)"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="About_me_tools_wrapper">
                        <div className="wrapper_tools">
                            <div className="About_me_tools">
                                <Cubics
                                    img={npm}
                                    title="NPM"
                                    children="npm é um gerenciador de pacotes para a linguagem de programação
                                        JavaScript. npm, Inc. é uma subsidiária do GitHub, que fornece hospedagem
                                         para desenvolvimento de software e controle de versão com o uso do Git.
                                          npm é o gerenciador de pacotes padrão para o ambiente de tempo de execução
                                          JavaScript Node.js."
                                    link="https://pt.wikipedia.org/wiki/Npm_(software)"/>
                                <Cubics img={git}
                                        title="Git"
                                        children="Git ₍ₒᵤ em inglês britânico₎ é um sistema de controle de versões
                                         distribuído, usado principalmente no desenvolvimento de software, mas pode
                                         ser usado para registrar o histórico de edições de qualquer tipo de arquivo."
                                        link="https://pt.wikipedia.org/wiki/Git"
                                />
                                <Cubics img={Figma}
                                        title="Figma"
                                        children="Figma é um editor gráfico de vetor e prototipagem de projetos
                                         de design baseado principalmente no navegador web, com ferramentas offline
                                          adicionais para aplicações desktop para GNU/Linux, macOS e Windows."
                                        link="https://pt.wikipedia.org/wiki/Figma"
                                />

                                <Cubics img={mysql}
                                        title="MYSQL"
                                        children="O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a
                                         linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento
                                         de bancos de dados mais populares da Oracle Corporation, com mais de 10
                                         milhões de instalações pelo mundo."
                                        link="https://pt.wikipedia.org/wiki/MySQL"
                                />
                                <Cubics img={styledComponents}
                                        title="Styled-Components"
                                        children="Os componentes estilizados são uma das novas maneiras de usar CSS
                                         no JavaScript moderno. Ele foi criado para ser um sucessor dos Módulos CSS,
                                          uma maneira de escrever CSS com escopo para um único componente e não vazar
                                           para nenhum outro elemento da página."
                                        link="https://styled-components.com/"
                                />
                                <Cubics img={yarn}
                                        title="Yarn"
                                        children="O Yarn é um gerenciador de pacotes para aplicar comandos prontos
                                         ao código de uma aplicação. ... O que reforça essa ideia é o fato de a
                                         ferramenta utilizar também os bancos de dados tanto do NPM quanto do Bower,
                                          outro importante e conhecido gerenciador de pacotes de códigos."
                                        link="https://yarnpkg.com/"
                                />
                            </div>
                            <div className="About_me_tools">
                                <Cubics
                                    img={Github}
                                    title="Github"
                                    children="GitHub é uma plataforma de hospedagem de código-fonte e arquivos com
                                    controle de versão usando o Git. Ele permite que programadores, utilitários ou
                                    qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou
                                    Open Source de qualquer lugar do mundo"
                                    link="https://pt.wikipedia.org/wiki/GitHub"
                                />
                                <Cubics
                                    img={axios}
                                    title="Axios"
                                    children="Axios é um cliente HTTP baseado em Promises para fazer requisições.
                                         Pode ser utilizado tanto no navegador quando no Node. js. É um projeto open
                                          source, disponível no Github, tem 77 mil stars e 7 mil forks!"
                                    link="https://blog.rocketseat.com.br/axios-um-cliente-http-full-stack/"
                                />
                                <Cubics img={node}
                                        title="Node.JS"
                                        children="Node.js é um software de código aberto, multiplataforma, baseado
                                         no interpretador V8 do Google e que permite a execução de códigos JavaScript
                                         fora de um navegador web. "
                                        link="https://nodejs.org/en/about/"
                                />
                                <Cubics img={WordPress}
                                        title="WordPress"
                                        children="WordPress é um sistema livre e aberto de gestão de conteúdo
                                         para internet, baseado em PHP com banco de dados MySQL, executado em um
                                          servidor interpretador, voltado principalmente para a criação de páginas
                                           eletrônicas e blogs online."
                                        link="https://wordpress.com/pt-br/"
                                />
                                <Cubics img={docker}
                                        title="Docker"
                                        children="Docker é um conjunto de produtos de plataforma como serviço
                                         que usam virtualização de nível de sistema operacional para entregar
                                          software em pacotes chamados contêineres. Os contêineres são isolados
                                           uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos
                                            de configuração."
                                        link="https://docs.docker.com/"
                                />
                                <Cubics img={vscode}
                                        title="VSCode"
                                        children="O Visual Studio Code é um editor de código-fonte desenvolvido pela
                                         Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração,
                                          controle de versionamento Git incorporado, realce de sintaxe, complementação
                                           inteligente de código, snippets e refatoração de código."
                                        link="https://pt.wikipedia.org/wiki/Visual_Studio_Code"
                                />
                            </div>
                        </div>
                        <div className="tools">
                            <Typical
                                steps={[
                                    'Ferramentas', 7000,
                                    'Tools', 7000,
                                ]}
                                loop={Infinity}
                                wrapper="h1"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Area>
    );
}

export default Sobre;