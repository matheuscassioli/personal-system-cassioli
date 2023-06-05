import { store } from "../Store/store"

export function removeErrorInputText(id) {
    let capture = document.querySelector(`#${id}`)
    capture.classList.remove('is-danger')
}

export function checkAutenticated() {
    let state = store.getState()
    if (state.auth_user !== undefined) {
        return true
    }
    if (state.auth_user === undefined || state.auth_user === '') {
        return false
    }
}
