import RootStack from '../../RootStack'
import {
    createReduxContainer, createReactNavigationReduxMiddleware,
    createReduxBoundAddListener
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import * as ReactNavigation from 'react-navigation'

createReactNavigationReduxMiddleware(
    state => state.navigationReducer,
    'root',
)

const AppNavi = createReduxContainer(RootStack, 'root')

const mapStateToProps = state => ({
    state: state.navigationReducer,
})

const AppNavigation = connect(mapStateToProps)(AppNavi)

export default AppNavigation
