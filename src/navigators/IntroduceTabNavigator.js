import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default createBottomTabNavigator({
    Home: {
        screen: StatusComponent,
        navigationOptions: {
            tabBarLabel: ({ tintColor }) => <View style={styles.labelView}><Text style={{ fontSize: 10, color: tintColor }} >Trang chủ</Text></View>,
            tabBarIcon: ({ tintColor }) => <Icon type="FontAwesome" style={{ fontSize: 24, color: tintColor }} name="home" />
        },
    },
    Contacted: {
        screen: StatusComponent,
        navigationOptions: {
            tabBarLabel: ({ tintColor }) => <View style={styles.labelView}><Text style={{ fontSize: 10, color: tintColor }} >Danh sách</Text></View>,
            tabBarIcon: ({ tintColor }) =>
                <View>
                    <Icon type="FontAwesome" style={{ fontSize: 20, color: tintColor }} name="users" />
                    <Badge danger style={{ position: 'absolute', left: 14, top: -4, width: 22, height: 22, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: '500', fontSize: 8 }}>99</Text>
                    </Badge>
                </View>
        },
    },
    SendIntroduce: {
        screen: StatusComponent,
        navigationOptions: {
            tabBarLabel: <View />,
            tabBarIcon: ({ tintColor }) => <Icon type="AntDesign" style={{ fontSize: 40, color: '#EA0000', paddingTop: 3 }} name="pluscircle" />//<Image source={iconPlus} style={{width: 40, height: 40}} />,
        },
    },
    Knowledge: {
        screen: StatusComponent,
        navigationOptions: {
            tabBarLabel: ({ tintColor }) => <View style={styles.labelView}><Text style={{ fontSize: 10, color: tintColor }} >Kiến thức BH</Text></View>,
            tabBarIcon: ({ tintColor }) => <Icon type="FontAwesome" style={{ fontSize: 22, color: tintColor }} name="globe" />
        },
    },
    Setting: {
        screen: StatusComponent,
        navigationOptions: {
            tabBarLabel: ({ tintColor }) => <View style={styles.labelView}><Text style={{ fontSize: 10, color: tintColor }} >Tuỳ chỉnh</Text></View>,
            tabBarIcon: ({ tintColor }) => <Icon type="FontAwesome" style={{ fontSize: 20, color: tintColor }} name="bars" />
        },
    },
},
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        showLabel: false,
        tabBarOptions: {
            activeTintColor: '#EA0000',
            inactiveTintColor: '#373E43',
            labelStyle: {
                color: '#373E43'
            }
        }
    }
)

const styles = StyleSheet.create({
    labelView: {
        paddingBottom: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})