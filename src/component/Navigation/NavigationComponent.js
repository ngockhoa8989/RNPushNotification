import React, { Component } from 'react'
import AppNavigation from './AppNavigation'
import { connect } from 'react-redux'
import { Firebase } from '../../services/firebaseConfig'
import { changeToLogin, changeToAdvisorMain, changeToIntroduceMain } from '../../actions'

class NavigationComponent extends Component {
    componentWillMount() {
        if (this.props.loginState.userType === '') {
            this.props.changeLogin()
        } else {
            if (this.props.loginState.userType.toLowerCase() === 'tvv') {
                Firebase.firebaseConfig.messaging().subscribeToTopic(`/topics/tcaInternal`)
                this.props.changeToAdvisorMain()
            } else {
                Firebase.firebaseConfig.messaging().subscribeToTopic(`/topics/tcaCustomer`)
                this.props.changeToIntroduceMain()
            }
        }
    }

    render() {
        return (
            <AppNavigation />
        )
    }
}

const mapStateToProps = state => {
    return {
        loginState: state.loginStateReducer,
    }
}

const mapDispatchToProps = dispatch => ({
    changeLogin: () =>
        dispatch(changeToLogin()),
    changeToAdvisorMain: () => dispatch(changeToAdvisorMain()),
    changeToIntroduceMain: () => dispatch(changeToIntroduceMain())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationComponent)
