import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer'
import navigationReducer from './Navigation/navigationReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const loginConfig = {
    key: 'login',
    storage
}

const loginStateReducer = persistReducer(loginConfig, loginReducer)

export default allReducers = combineReducers({
    loginStateReducer,
    navigationReducer
})