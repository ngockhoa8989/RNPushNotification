import React, { Component } from 'react'
import { Text, View, Switch } from 'react-native'
import styles from './styles'

export default class StatusItem extends Component {
    render() {
        const { circleColor, title, switchValue, onSwitch } = this.props
        return (
            <View style={{ marginTop: 20 }}>
                <View style={styles.childRowView}>
                    <View style={{ flex: 0.15 }}>
                        <View style={[styles.circleView, { backgroundColor: circleColor }]}></View>
                    </View>
                    <Text style={styles.nameText}>{title}</Text>
                    <View style={styles.switchView}>
                        <Switch trackColor={{ false: '#e6e9ed', true: '#ff0000' }} value={switchValue} onValueChange={onSwitch}></Switch>
                    </View>
                </View>
                <View style={styles.lineView}></View>
            </View>
        )
    }
}
