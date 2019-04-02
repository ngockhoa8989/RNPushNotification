import { put, takeLatest } from 'redux-saga/effects'
import { Api } from '../Api'
import { SENDNOTIFICATION_REQUEST, SENDNOTIFICATION_SUCCEEDED, SENDNOTIFICATION_FAILED } from '../../actions/actionTypes'

function* sendNotification(action) {
    try {
        const receivedData = yield Api.sendNotify(action.params)

        if (receivedData.success !== false) {
            yield put({ type: SENDNOTIFICATION_SUCCEEDED, receivedData })
        } else {
            yield put({ type: SENDNOTIFICATION_FAILED })
        }
    } catch (error) {
        yield put({ type: SENDNOTIFICATION_FAILED, error })
    }
}

export function* watchSendNotification() {
    yield takeLatest(SENDNOTIFICATION_REQUEST, sendNotification)
}