import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e9ed'
    },
    viewContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 8,
        backgroundColor: 'white',
        width: width - 40
    },
    leftView: {
        width: 10,
        marginLeft: -5,
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: '#ff0000',
        borderRadius: 8
    },
    rightView: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        marginBottom: 30
    },
    lineView: {
        height: 1,
        marginTop: 5,
        backgroundColor: '#e6e9ed'
    },
    childRowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    circleView: {
        width: 14,
        height: 14,
        borderRadius: 7
    },
    switchView: {
        flex: 1,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    nameText: {
        fontSize: 17
    },
    buttonText: {
        fontSize: 15,
        color: 'white'
    },
    saveButton: {
        backgroundColor: '#ff0000',
        height: 40,
        marginLeft: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
        marginTop: 20
    }
})