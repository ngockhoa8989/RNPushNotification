import {
    SENDNOTIFICATION_REQUEST, SENDNOTIFICATION_SUCCEEDED, SENDNOTIFICATION_FAILED, LOGIN,
    LoginAction, LogoutAction, IntroduceMainAction, AdvisorMainAction
} from './actionTypes'

export const sendNotificationAction = (params) => {
    return {
        type: SENDNOTIFICATION_REQUEST,
        params
    }
}

export const sendNotificationSuccessAction = (receivedData) => {
    return {
        type: SENDNOTIFICATION_SUCCEEDED,
        receivedData
    }
}

export const sendNOtificationFailedAction = (error) => {
    return {
        type: SENDNOTIFICATION_FAILED,
        error
    }
}

export const login = (params) => {
    return {
        type: LOGIN,
        params
    }
}

export const changeToLogin = () => {
    return {
        type: LoginAction
    }
}

export const changeToIntroduceMain = () => {
    return {
        type: IntroduceMainAction
    }
}

export const changeToAdvisorMain = () => {
    return {
        type: AdvisorMainAction
    }
}

export const logout = () => {
    return {
        type: LogoutAction
    }
}