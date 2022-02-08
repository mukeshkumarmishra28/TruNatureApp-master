import {
    Map,
  
  } from 'immutable'
  
  import  createReducer  from '../utils'
  import { ActionTypes } from '../constants'
  
  const initialLoginState = Map({
    isUserLogingIn: false,
    isUserLoggedIn: false,
    errorMessage: {},
    isErrorInLoading: false,
    isAccountLocked: false,
  })
  
  const initialFetchState = Map({
    isConfigurationLoading: false,
    isErrorLoadingConfiguration: false,
    errorLoadingConfiguration: '',
    configuration: [],
  })
  
  const initialState = initialLoginState.merge(initialFetchState)
  
  export default {
    login: createReducer(initialState, {
      [ActionTypes.SET_INITIATE_LOGIN]: (state, action) => (
        state.withMutations(stateMap => {
          stateMap.set('isUserLoggedIn', true)
          stateMap.set('isUserLogingIn', false)
          stateMap.set('isErrorInLoading', false)
          stateMap.set('errorMessage', {})
        })
      ),
      [ActionTypes.START_INITIATE_LOGIN]: (state, action) => (
        state.withMutations(stateMap => {
          stateMap.set('isAccountLocked', false)
          stateMap.set('isUserLoggedIn', false)
          stateMap.set('isUserLogingIn', true)
          stateMap.set('errorMessage', {})
          stateMap.set('isErrorInLoading', false)
        })
      ),
      [ActionTypes.ERROR_INITIATE_LOGIN]: (state, action) => {
        const { error } = action
        const { message = '', header = '' } = error
        return state.withMutations(stateMap => {
          stateMap.set('errorMessage', { message, header })
          stateMap.set('isErrorInLoading', true)
          stateMap.set('isUserLogingIn', false)
        })
      },
      [ActionTypes.SET_LOCKED_ACCOUNT]: (state, action) => {
        const { data } = action
        return state.withMutations(stateMap => {
          stateMap.set('isAccountLocked', data)
          stateMap.set('isUserLogingIn', false)
        })
      },
      [ActionTypes.LOGOUT_USER_LOGIN]: (state, action) => (
        state.withMutations(stateMap => {
          stateMap.set('isUserLoggedIn', false)
          stateMap.set('isUserLogingIn', false)
          stateMap.set('errorMessage', {})
          stateMap.set('isErrorInLoading', false)
        })
      ),
      [ActionTypes.START_FETCH_CONFIGURATION]: (state, action) => (
        state.merge(initialFetchState.set('isConfigurationLoading', true))
      ),
      [ActionTypes.SET_FETCH_CONFIGURATION]: (state, action) => {
        const {
          payload,
        } = action
        const {
          configuration,
        } = payload
        return state.withMutations(stateMap => {
          stateMap.set('isConfigurationLoading', false)
          stateMap.set('configuration', configuration)
          stateMap.set('errorLoadingConfiguration', '')
          stateMap.set('isErrorLoadingConfiguration', false)
        })
      },
      [ActionTypes.ERROR_FETCH_CONFIGURATION]: (state, action) => {
        const {
          error,
        } = action
        const {
          message,
        } = error
        return state.withMutations(stateMap => {
          stateMap.set('isConfigurationLoading', false)
          stateMap.set('configuration', [])
          stateMap.set('errorLoadingConfiguration', message)
          stateMap.set('isErrorLoadingConfiguration', true)
        })
      },
    }),
  }
  
  export const isAccountLocked = state => (
    state.getIn(['login', 'isAccountLocked'])
  )
  
  export const isUserLogingIn = state => (
    state.getIn(['login', 'isUserLogingIn'])
  )
  
  export const isUserLoggedIn = state => (
    state.getIn(['login', 'isUserLoggedIn'])
  )
  
  export const isErrorInLoading = state => (
    state.getIn(['login', 'isErrorInLoading'])
  )
  
  export const getErrorMessage = state => (
    state.getIn(['login', 'errorMessage'])
  )
  
  export const isConfigurationLoading = state => (
    state.getIn(['login', 'isConfigurationLoading'])
  )
  
  export const isErrorLoadingConfiguration = state => (
    state.getIn(['login', 'isErrorLoadingConfiguration'])
  )
  
  export const getErrorConfigurationLoading = state => (
    state.getIn(['login', 'errorLoadingConfiguration'])
  )
  
  export const getConfiguration = state => (
    state.getIn(['login', 'configuration'])
  )
  