import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const AUTH_USER = "AUTH_USER"
export const RESET_STORE = "RESET_STORE"

const initialState = ''

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                auth_user: action.auth_user,
            }
        case RESET_STORE:
            return initialState;

        default:
            return state;
    }
}


// Configure o persistor
const persistConfig = {
    key: 'root', // chave raiz para o armazenamento
    storage, // mecanismo de armazenamento a ser usado
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor }; 