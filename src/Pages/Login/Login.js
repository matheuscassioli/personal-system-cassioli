import React, { useEffect } from 'react'
import "./Login.css"
import InputComponent from '../../Components/InputTypes/InputComponent/InputComponent'
import ModalForgetPassword from '../../Components/ModalForgetPassword/ModalForgetPassword'
import { BsExclamationDiamondFill } from "react-icons/bs"
import { removeErrorInputText } from '../../HelpersFunctions/HelpersFunctions'
import { store, AUTH_USER } from '../../Store/store'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import ImageSlider from '../../Components/ImageSlider/ImageSlider'

export default function Login() {

    useEffect(() => {
        let state = store.getState()
        if (state.auth_user !== undefined) {
            navigate('/')
        }
        window.history.pushState(null, null, "login");
    }, [])
    const navigate = useNavigate()

    const showModalForget = e => {
        document.querySelector('.modal').classList.toggle('is-active')
    }
    const loginToPainel = e => {
        removeErrorInputText('email')
        removeErrorInputText('password')

        let email = document.querySelector('#email')
        let password = document.querySelector('#password')

        if (email.value !== 'user@user.com') {
            email.classList.add('is-danger')
            email.parentElement.parentElement.lastChild.innerHTML = "Senha incorreta ou campo vazio"
        } else {
            email.classList.add('is-success')
            email.parentElement.parentElement.lastChild.innerHTML = ""
        }
        if (password.value !== 'user321') {
            password.classList.add('is-danger')
            password.parentElement.parentElement.lastChild.innerHTML = "Senha incorreta ou campo vazio"
        } else {
            password.classList.add('is-success')
            password.parentElement.parentElement.lastChild.innerHTML = ""
        }

        if (email.value === 'user@user.com' && password.value === 'user321') {
            store.dispatch({ type: AUTH_USER, auth_user: email.value })
            toast.success(`Seja bem vindo user ${store.getState().auth_user}`, { autoClose: 1000 })
            console.log('ir')
            setTimeout(() => {
                window.location.href = window.origin
            }, 1000);
        }
    }

    return (
        <div className="background-login">
            <ToastContainer />
            <ModalForgetPassword />
            <div className='container'>
                <div className='container_left'>
                    <div className='left_card p-5 is-relative'>
                        <div className="dica-login" data-tooltip="Email: user@user.com - Senha: user321">Dica <BsExclamationDiamondFill /></div>
                        <p>Login</p>
                        <form>
                            <InputComponent
                                title="Email"
                                type="email"
                                id="email"
                                placeholder="Digite o email sugerido na dica"
                                icon={<i className="fas fa-envelope"></i>}
                            />

                            <InputComponent
                                title="Senha"
                                type="password"
                                id="password"
                                placeholder="Digite a senha sugerida na dica"
                                icon={<i className="fas fa-lock"></i>}
                            />
                        </form>
                        <a href='##' onClick={(e) => showModalForget(e)} className="forget-password">Esqueceu a senha?</a>
                        <div className="buttons">
                            <button className="button is-dark mt-3" onClick={(e) => loginToPainel(e)}>Entrar</button>
                        </div>
                    </div>
                </div>
                <div className='container_right package-flex'>
                    <ImageSlider />
                </div>
            </div>
        </div>
    )
}
