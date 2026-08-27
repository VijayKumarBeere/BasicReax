import { donorsApi } from '../../services/api'

const LOAD_DONORS = 'donors/load'
const LOAD_SUCCESS = 'donors/loadSuccess'
const LOAD_FAILURE = 'donors/loadFailure'
const ADD_SUCCESS = 'donors/addSuccess'
const UPDATE_SUCCESS = 'donors/updateSuccess'
const DELETE_SUCCESS = 'donors/deleteSuccess'

const initialState = { items: [], status: 'idle', error: null }

export const loadDonors = () => async (dispatch) => {
  dispatch({ type: LOAD_DONORS })
  try {
    const donors = await donorsApi.list()
    dispatch({ type: LOAD_SUCCESS, payload: donors })
  } catch (error) {
    dispatch({ type: LOAD_FAILURE, error: error.message })
  }
}

export const addDonor = (donor) => async (dispatch) => {
  const createdDonor = await donorsApi.create(donor)
  dispatch({ type: ADD_SUCCESS, payload: createdDonor })
}

export const updateDonor = (id, donor) => async (dispatch) => {
  const updatedDonor = await donorsApi.update(id, donor)
  dispatch({ type: UPDATE_SUCCESS, payload: updatedDonor })
}

export const deleteDonor = (id) => async (dispatch) => {
  await donorsApi.remove(id)
  dispatch({ type: DELETE_SUCCESS, payload: id })
}

export default function donorsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DONORS:
      return { ...state, status: 'loading', error: null }
    case LOAD_SUCCESS:
      return { ...state, status: 'succeeded', items: action.payload }
    case LOAD_FAILURE:
      return { ...state, status: 'failed', error: action.error }
    case ADD_SUCCESS:
      return { ...state, items: [action.payload, ...state.items] }
    case UPDATE_SUCCESS:
      return { ...state, items: state.items.map((donor) => donor.id === action.payload.id ? action.payload : donor) }
    case DELETE_SUCCESS:
      return { ...state, items: state.items.filter((donor) => donor.id !== action.payload) }
    default:
      return state
  }
}
