import React from 'react'
import "./ModalExit.css"
import { store, RESET_STORE } from "../../Store/store"
import { useNavigate } from 'react-router-dom'

export default function ModalExit({ data }) {

    const navigate = useNavigate()

    const closeModal = e => {
        document.querySelector('.modal').classList.remove('is-active')
    }

    const logout = e => {
        store.dispatch({ type: RESET_STORE })
        e.target.classList.add('is-loading')
        setTimeout(() => {
            e.target.classList.remove('is-loading')
            navigate('/login')
        }, 1000)
    }

    return (
        <div className="modal">
            <div className="modal-background" onClick={(e) => closeModal(e)}></div>
            <div className="modal-content is-relative">
                {data}
                <button className="modal-close" aria-label="close"></button>
                <div className='buttons'>
                    <button onClick={(e) => logout(e)} className='button is-dark is-small'>Sim</button>
                    <button onClick={(e) => closeModal(e)} className='button is-info is-small is-light'>Fechar</button>
                </div>
            </div>
        </div>
    )
}
