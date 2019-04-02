import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import StatusItem from './StatusItem'
import styles from './styles'
import { Firebase } from '../../services/firebaseConfig'

export default class StatusComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            advisorySwitch: true,
            signSwitch: true,
            contractSwitch: false,
            pendingSwitch: false
        }
    }

    componentWillMount() {
        const notifications = Firebase.firebaseConfig.notifications()
        notifications.onNotification(async (notification) => {
            const badgeCount = await notifications.getBadge()
            notification.android.setChannelId('app-infos')
            notifications.displayNotification(notification)
            notifications.setBadge(badgeCount + 1)
            console.log(notification)
            // this._showNotification(notification)
        })

        notifications.onNotificationOpened(async (notif) => {
            const badgeCount = await notifications.getBadge()
            notifications.setBadge(badgeCount - 1)
        })
    }

    onSwitch = (name) => {
        switch (name) {
            case 'advisory':
                this.setState({ advisorySwitch: !this.state.advisorySwitch })
                break
            case 'sign':
                this.setState({ signSwitch: !this.state.signSwitch })
                break
            case 'contract':
                this.setState({ contractSwitch: !this.state.contractSwitch })
                break
            case 'pending':
                this.setState({ pendingSwitch: !this.state.pendingSwitch })
                break
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewContainer}>
                    <View style={styles.leftView}></View>
                    <View style={styles.rightView}>
                        <StatusItem title='Tư vấn' circleColor='#F8D7D6' switchValue={this.state.advisorySwitch} onSwitch={() => this.onSwitch('advisory')}></StatusItem>
                        <StatusItem title='Ký HSYCBH' circleColor='#E98784' switchValue={this.state.signSwitch} onSwitch={() => this.onSwitch('sign')}></StatusItem>
                        <StatusItem title='HĐ phát hành' circleColor='#E25F5B' switchValue={this.state.contractSwitch} onSwitch={() => this.onSwitch('contract')}></StatusItem>
                        <StatusItem title='Chờ thanh toán' circleColor='#DB3732' switchValue={this.state.pendingSwitch} onSwitch={() => this.onSwitch('pending')}></StatusItem>
                        <TouchableOpacity style={styles.saveButton}>
                            <Text style={styles.buttonText}>Lưu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
