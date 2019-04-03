import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import LoginComponent from './component/Login/LoginComponent'
import React from 'react'
import { Icon, Badge } from 'native-base'
import StatusComponent from './component/Status/StatusComponent'
import { View, Text, StyleSheet } from 'react-native'
import AdvisorMain from './navigators/AdvisorTabNavigator'
import IntroduceMain from './navigators/IntroduceTabNavigator'

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginComponent,
    },
    AdvisorMain: {
        screen: AdvisorMain,
    },
    IntroduceMain: {
        screen: IntroduceMain,
    }
}, {
        headerMode: 'none',
        defaultNavigationOptions: {
            gesturesEnabled: false,
        },
    })

export default RootStack = createAppContainer(AppNavigator)