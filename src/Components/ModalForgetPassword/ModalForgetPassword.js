import React from 'react'
import { BsExclamationTriangleFill } from "react-icons/bs"
import "./ModalForgetPassword.css"
export default function ModalForgetPassword() {

    const closeModalForget = e => {
        document.querySelector('.modal').classList.toggle('is-active')
    }
 
    return (
        <div className="modal">
            <div className="modal-background" onClick={(e) => closeModalForget(e)}></div>
            <div className="modal-content">
                Verifique a senha no botão dica  <BsExclamationTriangleFill />
            </div>
            <button className="modal-close is-large" onClick={(e) => closeModalForget(e)} aria-label="close"></button>
        </div>
    )
}
