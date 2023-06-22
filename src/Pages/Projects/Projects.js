import React from 'react'
import "./Projects.css"
import cine from "./img/cine.PNG"
import space from "./img/space.PNG"
import games from "./img/games.PNG"

export default function Projects() {

    return (
        <div className='projects-container'>
            <div className='projects'>
                <a href="https://cine-alura.vercel.app" target='_blank'><img src={cine} className='card-img' /></a>
                <a href="https://alura-space-react-69hd.vercel.app" target='_blank'><img src={space} className='card-img' /></a>
                <a href="https://matheuscassioli.github.io/challenge5-alura-front-end/" target='_blank'><img src={games} className='card-img' /></a>
            </div >
        </div >
    )
}
