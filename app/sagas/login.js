import { call, put, takeLatest } from 'redux-saga/effects'

import { isUndefined, map, isEmpty, isArray, get } from 'lodash'

import {
  api,
  getLogInUrl,
 
  getConfigurationUrl,
 
} from '../utils'

import {
  ActionTypes,
} from '../constants'


const fetchLoginData = (username, password) => api({
  data: {
    
    emailId: username,
    password: password,

  },
  method: 'post',
  url: getLogInUrl(),
})

const fetchConfiguration = () => api({
  data: {},
  method: 'post',
  url: getConfigurationUrl(),
})

export const updateUserPreferredLanguage = (emailAddress, partyID) => api({
  data: {
    InputParameters: {
      EmailId: emailAddress,
      PreferredLanguage: currentDeviceLocale(),
      PartyId: partyID,
      localizedMessage: null,
      servicestatus: null,
      servicemessage: null,
    },
  },
  method: 'post',
  url: updatePreferredLanguageAPI(),
})

function* fetchLoginDataSaga(action) {
  try {
    const { username, password } = action
    const { SUCCESS, LOCKED } = API_RESPONSE_CODE
    yield put({ type: ActionTypes.START_INITIATE_LOGIN })
    const response = yield call(fetchLoginData, username, password)
    const { status, statusDesc } = response
    if (status === SUCCESS) {
      const params = { status: 'success' }

     
      
    }

    else {
      const params = { status: 'failed', email: username }
      pushEventForAnalytics(LOGIN, params)
      let e = {
        message: statusDesc || '', // TODO: to be changed to statusDesc
        header: 'Alert!',
      }
      if (status.toUpperCase().includes('ERROR')) {
        e = {
          ...e,
          header: localizedString('Sorry'),
          message: localizedString('Something went wrong_Please try again later'),
        }
      }
      yield put({ type: ActionTypes.ERROR_INITIATE_LOGIN, error: e })
    }
  }
  catch (e) {
    const error = {
      message: localizedString('Something went wrong_Please try again later'),
    }
    yield put({ type: ActionTypes.ERROR_INITIATE_LOGIN, error })
  }
}

function* fetchConfigurationSaga() {
  try {
    yield put({
      type: ActionTypes.START_FETCH_CONFIGURATION,
    })
    const response = yield call(fetchConfiguration)
    const rowSet = get(response, 'RowSet')[0]
    const row = get(rowSet, 'Row')[0]
    const column = get(row, 'Column')[0]
    const configurationObject = jsonParser(get(column, '$'))
    const configuration = get(
      configurationObject,
      'RowSet.Row.Column.KeyValueList.KeyValuePair',
    )
    const payload = {
      configuration,
    }
    yield put({
      type: ActionTypes.SET_FETCH_CONFIGURATION,
      payload,
    })
  }
  catch (e) {
    const error = {
      message: localizedString('Sorry, something went wrong, please try again later'),
    }
    yield put({
      type: ActionTypes.ERROR_FETCH_CONFIGURATION,
      error,
    })
  }
}

export default function* watcherSaga() {
  yield takeLatest(ActionTypes.GET_INITIATE_LOGIN, fetchLoginDataSaga)
  yield takeLatest(ActionTypes.GET_FETCH_CONFIGURATION, fetchConfigurationSaga)
}
