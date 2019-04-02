import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import { Firebase } from '../../services/firebaseConfig'
import { login, changeToAdvisorMain, changeToIntroduceMain } from '../../actions'

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userType: ''
        }
    }

    async getToken() {
        const fcmToken = await Firebase.firebaseConfig.messaging().getToken()
        if (fcmToken) {
            console.log(fcmToken)
            // user has a device token
        } else {
            // user doesn't have a device token yet
        }
    }

    componentWillMount() {
        Firebase.firebaseConfig.messaging().requestPermission()
        this.getToken()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loginState.userType.toLowerCase().includes('tvv')) {
            this.props.changeToAdvisorMain()
        } else {
            this.props.changeToIntroduceMain()
        }
    }

    onLogin = () => {
        if (this.state.userType.toLowerCase().includes('tvv') || this.state.userType.toLowerCase().includes('ngt')) {
            this.props.onLogin(this.state.userType)
        } else {
            alert('Wrong user type!')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.inputTitle}>User type</Text>
                <TextInput style={styles.input} placeholder='tvv or ngt' onChangeText={(text) => this.setState({ userType: text })} value={this.state.userType}></TextInput>
                <TouchableOpacity style={styles.button} onPress={this.onLogin}>
                    <Text style={styles.buttonTitle}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        loginState: state.loginStateReducer,
    }
}

const mapDispatchToProps = dispatch => ({
    onLogin: (params) => dispatch(login(params)),
    changeToAdvisorMain: () => dispatch(changeToAdvisorMain()),
    changeToIntroduceMain: () => dispatch(changeToIntroduceMain())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)