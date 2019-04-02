import firebase from 'react-native-firebase'
import { Platform } from 'react-native'

// const functions = require('firebase-functions')

const androidConfig = {
    clientId: '4153407858-70k41epdad63q3uv2okr87ld73m4dhmc.apps.googleusercontent.com',
    appId: '1:4153407858:android:8ae36edb4913891e',
    apiKey: 'AIzaSyAlrC7PYoT48rHoMED3UXvgiw2BcRKRZq8',
    databaseURL: 'https://demochatfirebase-6549b.firebaseio.com',
    storageBucket: 'demochatfirebase-6549b.appspot.com',
    messagingSenderId: '4153407858',
    projectId: 'demochatfirebase-6549b',
    persistence: true
}

const firebaseConfig = firebase.initializeApp(
    Platform.OS === 'ios' ? iosConfig : androidConfig,
    'RNPushNotification'
)

export const Firebase = {
    firebaseConfig
}