import RootStack from '../../RootStack'
import { Login, AdvisorMain, IntroduceMain } from '../../utilities/ScreenName'
import { NavigationActions, StackActions } from 'react-navigation'
import {
    LogoutAction, LoginAction, IntroduceMainAction, AdvisorMainAction
} from '../../actions/actionTypes'

const action = RootStack.router.getActionForPathAndParams(Login)
const tempNavState = RootStack.router.getStateForAction(action)

const initialNavState = RootStack.router.getStateForAction(
    tempNavState
)

function navigationReducer(state = initialNavState, action) {
    let nextState
    switch (action.type) {
        case LoginAction:
            nextState = RootStack.router.getStateForAction(
                NavigationActions.navigate({ routeName: Login }),
                state
            )
            break
        case AdvisorMainAction:
            nextState = RootStack.router.getStateForAction(
                NavigationActions.navigate({ routeName: AdvisorMain }),
                state
            )
            break
        case IntroduceMainAction:
            nextState = RootStack.router.getStateForAction(
                NavigationActions.navigate({ routeName: IntroduceMain }),
                state
            )
            break
        case LogoutAction:
            nextState = RootStack.router.getStateForAction(
                StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: Login })]
                }),
                state
            )
            break
        default:
            nextState = RootStack.router.getStateForAction(action, state)
            break
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state
}

export default navigationReducer