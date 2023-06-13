import React, { useEffect, useState } from 'react'
import "./HomePage.css"
import { TypeAnimation } from 'react-type-animation';
import { MdExitToApp } from 'react-icons/md'
import ModalExit from "../../Components/ModalExit/ModalExit"
import perfil from "./minhafoto.png"
import Loader from '../../Components/Loader/Loader';


export default function HomePage() {

    useEffect(() => {
        setTimeout(() => {
            setShowInfo(true)
        }, 1500)
    }, [])

    const [showInfo, setShowInfo] = useState(false)

    const showModalExit = e => {
        document.querySelector('.modal').classList.toggle('is-active')
    }

    return (
        <div className='hug-side is-flex'>
            {/* <SideNav /> */}
            <div className='content-container'>
                <TypeAnimation
                    cursor={false}
                    sequence={[
                        'Seja bem vindo ao Painel Cassioli :)',
                        1500,
                    ]}
                    wrapper="span"
                    speed={60}
                    style={{ fontSize: '2em', display: 'block', textAlign: 'center', padding: '1rem 0' }}
                    repeat={1}
                />

                {showInfo ? <div className='apresentation-container'>
                    <div className='apresentation-text'>
                        <p>Olá, me chamo Matheus Cassioli, formado em Análise e desenvolvimento de sistemas. Atualmente desenvolvedor front-end na Penso tecnologia, empresa na qual oferece diversas soluções de TI, como armazenamento em nuvem, serviços de email Zimbra, back-ups e etc.</p>

                        <p>Montei esse repositório para sintetizar tudo o que venho desenvolvendo, tanto no meu dia-a-dia no trabalho, como em cursos ao logo da minha jornada.</p>

                        <p>A principal idéia desse espaço é manter salvo tudo o que achei relevante dentre todos os projetos que ja realizei, é importante salientar que trabalho principalmente com ReactJs, então muita coisa por aqui vai ser em cima dessa biblioteca Javascipt, também renderizações de dados de API, animações em css, bibliotecas auxiliares para react e muito mais :) </p>
                    </div>
                    <div className='apresentation-picture'>
                        <img src={perfil} alt="Minha foto de perfil - Matheus Cassioli" />
                    </div>
                </div> : <Loader className="loader-home" />}
            </div>


            <MdExitToApp onClick={(e) => showModalExit(e)} className='icon-exit' />
            <ModalExit data="Tem certeza que deseja sair?" />
        </div>

    )
}
