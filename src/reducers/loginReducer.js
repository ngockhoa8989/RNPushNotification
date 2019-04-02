import { LOGIN } from '../actions/actionTypes'

const initialState = {
    userType: '',
}

export const loginReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case LOGIN:
            return { ...state, userType: actions.params }
        default: return state
    }
}