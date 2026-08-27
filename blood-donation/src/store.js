import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import donorsReducer from './features/donors/donorsSlice'

const rootReducer = combineReducers({
  donors: donorsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
