import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    inputTitle: {
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 20
    },
    input: {
        height: 40,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 5,
        paddingLeft: 5,
    },
    button: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        height: 40
    },
    buttonTitle: {
        fontSize: 15,
        color: 'white'
    }
})