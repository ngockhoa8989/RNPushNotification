import {
    fork
} from 'redux-saga/effects'

import { watchSendNotification } from './Notification/notiSaga'

export default function* rootSaga() {
    yield fork(watchSendNotification)
}